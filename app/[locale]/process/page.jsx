import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import { useTranslations } from "next-intl";
import React from "react";

const ProcessPage = () => {
  const t = useTranslations("Process");
  
  return (
    <div>
      <PageIntro eyebrow={t("Process0")} title={t("Process1")}>
        <p>
        {t("Process2")}
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </div>
  );
};

export default ProcessPage;
