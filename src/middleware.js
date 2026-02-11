// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//     matcher: ['/', '/(am|en|ru)/:path*']
// };

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { localesRegex } from './utils/regex';
// import { jwtVerify, createRemoteJWKSet } from 'jose';

// const JWKS = createRemoteJWKSet(new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}/.well-known/jwks.json`));

// async function verifyToken(token) {
//     try {
//         const { payload } = await jwtVerify(token, JWKS, {
//             audience: process.env.NEXT_PUBLIC_API_AUDIENCE,
//             issuer: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
//         });
//         console.warn(payload);

//         return payload;
//     } catch (err) {
//         console.log('Token verification failed:', err.message);
//         return null;
//     }
// }

export default function middleware(req) {
    const url = req.nextUrl;
    const { pathname } = url;

    const nextLocale = req.cookies.get('NEXT_LOCALE')?.value;
    const token = req.cookies.get('access_token')?.value;

    if (!localesRegex.test(pathname) && !nextLocale) {
        return NextResponse.redirect(new URL(`/hy${pathname}`, req.url));
    }

    // if (pathname.startsWith(`/${nextLocale || 'hy'}/auth`)) {
    //     if (!token) {
    //         return NextResponse.redirect(new URL(`/`, req.url));
    //     }

    //     const payload = await verifyToken(token);

    //     if (payload) {
    //         return NextResponse.redirect(new URL(`/`, req.url));
    //     }
    // }

    return createMiddleware(routing)(req);
}

export const config = {
    matcher: ['/', '/(hy|en|ru)/:path*'],
};
