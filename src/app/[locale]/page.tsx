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

export default function Home() {
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
