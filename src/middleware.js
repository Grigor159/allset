// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//     matcher: ['/', '/(am|en|ru)/:path*']
// };

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './lib/i18n/routing';

export default function middleware(req) {
    const url = req.nextUrl;
    const { pathname } = url;
    const localeRegex = /^\/(hy|en|ru)(\/|$)/;
    const nextLocale = req.cookies.get('NEXT_LOCALE')?.value;

    if (!localeRegex.test(pathname) && !nextLocale) {
        return NextResponse.redirect(new URL(`/hy${pathname}`, req.url));
    }

    return createMiddleware(routing)(req);
}

export const config = {
    matcher: ['/', '/(hy|en|ru)/:path*'],
};
