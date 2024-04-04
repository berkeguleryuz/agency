import PageIntro from "@/components/PageIntro";
import { useTranslations } from "next-intl";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

const WorkPage = () => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Work");
  return (
    
    <div>
      <PageIntro
        eyebrow={t("Work0")}
        title={t("Work1")}>
        <p>
        {t("Work2")}
        </p>
      </PageIntro>
    </div>
  );
};

export default WorkPage;
