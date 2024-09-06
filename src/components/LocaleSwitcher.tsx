/*
 * @Author: Mr.Car
 * @Date: 2024-09-04 21:43:57
 */
import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {routing} from '@/i18n/routing';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <div>
      {/* <GlobalOutlined className='py-3'/> */}
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}