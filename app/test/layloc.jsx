// import clsx from "clsx";
// import { Inter } from "next/font/google";
// import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
// import { locales } from "../../config";

// const inter = Inter({ subsets: ["latin"] });

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });

//   return {
//     title: t("title"),
//   };
// }

// export default async function LocaleLayout({ children, params: { locale } }) {
//   // Enable static rendering
//   unstable_setRequestLocale(locale);

//   return (
//     <html className="h-full" lang={locale}>
//       <body className={clsx(inter.className, "flex h-full flex-col")}>
//         {children}
//       </body>
//     </html>
//   );
// }
