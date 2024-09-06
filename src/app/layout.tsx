/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 23:20:38
 */
import {ReactNode} from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

export default function RootLayout({children}: Props) {
  return children;
}