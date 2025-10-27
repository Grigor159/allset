import { defineRouting } from 'next-intl/routing';
import { locales } from '@/utils/constants';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: locales,
    defaultLocale: 'hy',
    localePrefix: {
        mode: 'always',
        prefixes: {
            'hy': '/hy',
            'en': '/en',
            'ru': '/ru'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);