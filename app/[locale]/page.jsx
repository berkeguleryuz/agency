import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import { useTranslations } from "next-intl";
import { LocaleSwitchers } from "@/components/LangToggle";
import { unstable_setRequestLocale } from "next-intl/server";
import Values from "@/components/Values";

export default function Home({ locale }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  return (
    <main className="text-black">
      {/* <div className="flex justify-center">
        <LocaleSwitchers />
      </div> */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            {t("Home0")}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">{t("Home1")}</p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials className="mt-24 sm:mt-32 lg:mt-40">
        {t("Home2")}
      </Testimonials>
      <Services />
      <ContactSection />
      <Values />
    </main>
  );
}
