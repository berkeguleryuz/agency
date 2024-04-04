import RootLayout from "@/components/RootLayout";
import "../globals.css";
import { locales } from "../../config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages, useTimeZone } from "next-intl";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

// export const metadata = {
//   title: "Clodron Agency",
//   description: "Clodron Marketing & Web3 Agency",
// };

export default function Layout({ children, className, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone();
  return (
    <html
      lang={locale}
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100">
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={timeZone}>
          <RootLayout locale={locale} messages={messages} timeZone={timeZone}>
            {children}
          </RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
