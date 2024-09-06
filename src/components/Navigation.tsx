/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 21:43:32
 */
"use client";
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import {GlobalOutlined} from '@ant-design/icons'; // GlobalOutlined
import { useState } from 'react';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
interface NavigationProps {
  className?: string;
}

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    // <div className="bg-slate-850 background-blend-multiply sticky top-0 z-50">
    <div className="bg-slate-850 background-blend-multiply z-50">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between text-grey-600">
          <Image src="/logo.svg" alt="Logo" width={180} height={37} className="h-10 w-10"></Image>
          <div className="hidden md:flex">
            <NavigationLink href="/">{t('home')}</NavigationLink>
            <NavigationLink href="/news">{t('news')}</NavigationLink>
            <NavigationLink href="/work">{t('work')}</NavigationLink>
            <NavigationLink href="/share">{t('share')}</NavigationLink>
            <NavigationLink href="/experience">{t('experience')}</NavigationLink>
            <NavigationLink href="/members">{t('members')}</NavigationLink>
            <NavigationLink href="/about">{t('about')}</NavigationLink>
          </div>
          
          <LocaleSwitcher />
          {/* <ThemeSwitcher /> */}
          <button
            id="menu-btn"
            className={(isActive? "open": "") + " block hamburger md:hidden focus:outline-nonen"}
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            className={(isActive ? "flex" : "hidden") + " absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}
          >
            <NavigationLink href="/">{t('home')}</NavigationLink>
            <NavigationLink href="/news">{t('news')}</NavigationLink>
            <NavigationLink href="/work">{t('work')}</NavigationLink>
            <NavigationLink href="/share">{t('share')}</NavigationLink>
            <NavigationLink href="/experience">{t('experience')}</NavigationLink>
            <NavigationLink href="/members">{t('members')}</NavigationLink>
            <NavigationLink href="/about">{t('about')}</NavigationLink>
          </div>
        </div>
      </nav>
    </div>
  );
}