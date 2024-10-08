/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 21:23:04
 */
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|zh)/:path*']
};