import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import { useTranslations } from "next-intl";

import React from "react";

const AboutPage = () => {
  const t = useTranslations("About");

  return (
    <div>
      <PageIntro eyebrow={t("About0")} title={t("About1")}>
        <p>{t("About2")}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>{t("About3")}</p>
          <p>{t("About4")}</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label={t("About5")} />
          <StatListItem value="7" label={t("About6")} />
          <StatListItem value="< $1M" label={t("About7")} />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
