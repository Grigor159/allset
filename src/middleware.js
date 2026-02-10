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

export default function middleware(req) {
    const url = req.nextUrl;
    const { pathname } = url;

    const nextLocale = req.cookies.get('NEXT_LOCALE')?.value;
    const token = req.cookies.get('access_token')?.value;

    if (!localesRegex.test(pathname) && !nextLocale) {
        return NextResponse.redirect(new URL(`/hy${pathname}`, req.url));
    }

    if (pathname.includes('/auth') && !token) {
        return NextResponse.redirect(new URL(`/`, req.url));
    }

    return createMiddleware(routing)(req);
}

export const config = {
    matcher: ['/', '/(hy|en|ru)/:path*'],
};
