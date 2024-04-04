import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/app/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";
import { useTranslations } from "next-intl";

const Discover = () => {
  const t = useTranslations("Process");

  return (
    <Section title={t("Process3")} image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        {t("Process4")}
        </p>
        <p>
        {t("Process5")}
        </p>
        <p>
        {t("Process6")}
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      {t("Process7")}
      </h3>
      <TagList className="mt-4">
        <TagListItem>{t("Process8")}</TagListItem>
        <TagListItem>{t("Process9")}</TagListItem>
        <TagListItem>{t("Process10")}</TagListItem>
        <TagListItem>{t("Process11")}</TagListItem>
        <TagListItem>{t("Process12")}</TagListItem>
        <TagListItem>{t("Process13")}</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;