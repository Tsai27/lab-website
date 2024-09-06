/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 21:22:25
 */
import {defineRouting} from 'next-intl/routing';
import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/news':'/news',
    '/work':'/work',
    '/share':'/share',
    '/experience':'/experience',
    '/members': '/members',
    '/about':'/about',
    // '/pathnames': {
    //   en: '/pathnames',
    //   zh: '/路径'
    // }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration