import { NextRequest, NextResponse } from 'next/server'
import { checkAuthCookie } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get('ce-admin-auth')
  const isAuth = cookie?.value === 'authenticated'

  return NextResponse.json({ authenticated: isAuth })
}
