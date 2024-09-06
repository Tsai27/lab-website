import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  // const t = useTranslations('PageLayout');

  return (
    // <div className="relative flex grow flex-col py-36">
    //   <div className="container relative flex grow flex-col px-4 mx-auto">
    //     <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-600 md:text-5xl">
    //       {title}
    //     </h1>
    //     <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
    //     <div className="mt-auto grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:gap-12">
    //     </div>
    //   </div>
    // </div>

    <div className="relative flex grow flex-col py-36">
      <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
    </div>
  );
}
