import { useTranslations } from "next-intl";

export default function HomeCTA() {
    const t = useTranslations('HomePage');
    return (
        <section id="cta" className="bg-brightRed">
          <div
            className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
          >
            <h2
              className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left"
            >
              {t("CTATitle")   }
            </h2>
            <div className="ml-8">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
                >{t("CTAGo")}</a
              >
            </div>
          </div>
        </section>
    )
}