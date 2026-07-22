import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { access } from 'fs'


const AUTH_ROUTES = ['/login', '/register']
const PUBLIC_ROUTES = ['/', '/property']
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname
    //   return NextResponse.redirect(new URL('/', request.url))
    const accessToken = request.cookies.get('accessToken')?.value
    console.log(accessToken);

    const decodedToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null;

    let userRole = null;
    if (decodedToken) {
        userRole = decodedToken.role
    }

    if (accessToken && AUTH_ROUTES.includes(pathName)) {
        if (userRole == "TENANT") {
            return NextResponse.redirect(new URL('/tenant-dashboard', request.url))
        }
        else if (userRole == "LANDLORD") {
            return NextResponse.redirect(new URL('/landlord-dashboard', request.url))
        }
        else if (userRole == "ADMIN") {
            return NextResponse.redirect(new URL('/admin-dashboard', request.url))
        }
        else {
            return NextResponse.redirect(new URL('/', request.url))
        }

    }

    const isPublicRoutes = PUBLIC_ROUTES.some((route) => pathName === route || pathName.startsWith(route + '/'))

    const isAuthRoutes= AUTH_ROUTES.some((route)=> pathName===route || pathName.startsWith(route+'/'))
    if(!accessToken && !isPublicRoutes && !isAuthRoutes){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()



}


// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: [
        // '/tenant-dashboard/:path*'
        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'
    ]
}