import { useTranslations } from "next-intl"
/*
 * @Author: Mr.Car
 * @Date: 2024-09-06 19:47:40
 */
export default function Footer() {
    const t = useTranslations('Footer')
    return (
        <footer className="bg-veryDarkBlue bottom-0">
          <div
            className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
          >
            <div
              className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
            >
              <div className="mx-auto my-6 text-center text-white md:hidden">
                {t("copyright")}
              </div>
              <div>
                <img src="img/logo-white.svg" className="h-8" alt="" />
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="img/icon-facebook.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="img/icon-youtube.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="img/icon-twitter.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="img/icon-pinterest.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="img/icon-instagram.svg" alt="" className="h-8" />
                </a>
              </div>
            </div>
            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
              </div>
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
                <a href="#" className="hover:text-brightRed">{t("link")}</a>
              </div>
            </div>
    
            <div className="flex flex-col justify-between">
              <form>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    className="flex-1 px-4 rounded-full focus:outline-none"
                    placeholder={t("link")}
                  />
                  <button
                    className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                  >
                    {t("link")}
                  </button>
                </div>
              </form>
              <div className="hidden text-white md:block">
              {t("copyright")}
              </div>
            </div>
          </div>
        </footer>
    )
}