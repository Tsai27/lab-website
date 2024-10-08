/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 21:13:50
 */
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Navigation from '@/components/Navigation';
import {Link} from '@/i18n/routing';
import PageLayout from '@/components/PageLayout';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { Button } from "antd";
import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomeTestimonials from "./HomeTestimonials";
import HomeCTA from "./HomeCTA";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default function Home({
  children,
  params: {locale}
}: any) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');
  return (
    <PageLayout title={t('title')}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeHero/>
        <HomeFeatures/>
        <HomeTestimonials/>
        <HomeCTA/>
      </main>
    </PageLayout>
  );
}
