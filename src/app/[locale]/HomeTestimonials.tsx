import { useTranslations } from "next-intl";

/*
 * @Author: Mr.Car
 * @Date: 2024-09-06 19:37:32
 */
export default function HomeTestimonials() {
    const t = useTranslations('HomePage');
    return (
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
                {t("testimonialTitle")}
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <div
                className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
                >
                <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">{t("testimonialFirst")}</h5>
                <p className="text-sm text-darkGrayishBlue">
                    {t("testimonialFirstDetail")}
                </p>
                </div>

                <div
                className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                >
                <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">{t("testimonialSecond")}</h5>
                <p className="text-sm text-darkGrayishBlue">
                    {t("testimonialSecondDetail")}
                </p>
                </div>

                <div
                className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                >
                <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">{t("testimonialThird")}</h5>
                <p className="text-sm text-darkGrayishBlue">
                    {t("testimonialThirdDetail")}
                </p>
                </div>
            </div>
            <div className="my-16">
                <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                >{t("testimonialGo")}</a
                >
            </div>
        </div>
    )
}