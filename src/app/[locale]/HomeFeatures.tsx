import { useTranslations } from "next-intl"

export default function HomeFeatures(){
    const t = useTranslations('HomePage')
    return(
        <div
          className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
        >
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              {t("featuresTitle")}
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              {t("featuresDetail")}
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                  >
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {t("featuresFirstTitle")}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {t("featuresFirstTitle")}
                </h3>
                <p className="text-darkGrayishBlue">
                  {t("featuresFirstDetail")}
                </p>
              </div>
            </div>

            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                  >
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {t("featuresSecondTitle")}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {t("featuresSecondTitle")}
                </h3>
                <p className="text-darkGrayishBlue">
                  {t("featuresSecondDetail")}
                </p>
              </div>
            </div>

            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                  >
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {t("featuresThirdTitle")}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {t("featuresThirdTitle")}
                </h3>
                <p className="text-darkGrayishBlue">
                  {t("featuresThirdDetail")}
                </p>
              </div>
            </div>
          </div>
        </div>

    )

}