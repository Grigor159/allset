import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['hy', 'en', 'ru'],
    defaultLocale: 'hy',
    localePrefix: {
        mode: 'always',
        prefixes: {
            'am': '/hy',
            'en': '/en',
            'ru': '/ru'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);