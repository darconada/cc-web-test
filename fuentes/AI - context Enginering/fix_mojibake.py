#!/usr/bin/env python3
import argparse, pathlib, sys, re
from ftfy import fix_text

# Emoji (y variation selector) – si activas --strip-emoji los quita
EMOJI_RE = re.compile(
    "["                                     # bloques comunes de emoji
    "\U0001F300-\U0001F5FF"
    "\U0001F600-\U0001F64F"
    "\U0001F680-\U0001F6FF"
    "\U0001F700-\U0001F77F"
    "\U0001F780-\U0001F7FF"
    "\U0001F800-\U0001F8FF"
    "\U0001F900-\U0001F9FF"
    "\U0001FA00-\U0001FAFF"
    "\u2600-\u27BF"          # símbolos varios (incluye ✓, ✖, etc.)
    "\uFE0F"                 # variation selector
    "]"
)

def strip_emoji(s: str) -> str:
    return EMOJI_RE.sub("", s)

def iter_targets(path_arg: str, exts: tuple[str, ...]):
    p = pathlib.Path(path_arg)
    if p.is_file():
        if p.suffix.lower() in exts:
            yield p
    elif p.is_dir():
        for f in p.rglob("*"):
            if f.is_file() and f.suffix.lower() in exts:
                yield f

def process_one(p: pathlib.Path, in_place=False, stripemoji=False, suffix=None) -> tuple[bool, pathlib.Path]:
    raw = p.read_text(encoding="utf-8", errors="replace")
    fixed = fix_text(raw)
    if stripemoji:
        fixed = strip_emoji(fixed)
    if fixed == raw:
        return False, p
    if in_place:
        p.write_text(fixed, encoding="utf-8")
        return True, p
    else:
        # si no se indicó sufijo, decide según si quitas emoji o no
        if suffix is None:
            suffix = ".clean" if stripemoji else ".ftfy"
        out = p.with_suffix(p.suffix + suffix + ".md") if p.suffix.lower() != ".md" else p.with_suffix(p.suffix + suffix)
        out.write_text(fixed, encoding="utf-8")
        return True, out

def main():
    ap = argparse.ArgumentParser(description="Repara mojibake con ftfy. Acepta ficheros y carpetas.")
    ap.add_argument("paths", nargs="+", help="Ficheros o carpetas a procesar")
    ap.add_argument("--exts", default=".md,.mdx,.txt,.html", help="Extensiones admitidas separadas por coma")
    ap.add_argument("--in-place", "-w", action="store_true", help="Sobrescribe el fichero (haz backup antes)")
    ap.add_argument("--strip-emoji", action="store_true", help="Quita emojis y variation selectors")
    ap.add_argument("--suffix", default=None, help="Sufijo para el fichero de salida (por defecto .ftfy o .clean)")
    args = ap.parse_args()

    exts = tuple(x.strip().lower() for x in args.exts.split(",") if x.strip())
    processed = repaired = 0

    for target in args.paths:
        for f in iter_targets(target, exts):
            processed += 1
            changed, out = process_one(f, in_place=args.in_place, stripemoji=args.strip_emoji, suffix=args.suffix)
            if changed:
                repaired += 1
                print(f"Arreglado: {f} -> {out}" if out != f else f"Arreglado: {f} (in-place)")

    print(f"\nProcesados: {processed}  |  Reparados: {repaired}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
