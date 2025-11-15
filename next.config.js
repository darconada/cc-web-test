/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Para deployment local sin optimización de imágenes
  },
  // Configuración para archivos markdown y assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    return config;
  },
}

module.exports = nextConfig
