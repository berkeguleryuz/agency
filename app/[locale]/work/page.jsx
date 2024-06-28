import PageIntro from "@/components/PageIntro";
import { useTranslations } from "next-intl";
import React from "react";
import { Marquee3D } from "@/components/3d";

const WorkPage = () => {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("Work");
  return (
    <div>
      <PageIntro eyebrow={t("Work0")} title={t("Work1")}>
        <div className="mb-4">
        <Marquee3D />
        </div>
        <p>{t("Work2")}</p>
      </PageIntro>
    </div>
  );
};

export default WorkPage;
