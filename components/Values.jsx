import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import { useTranslations } from "next-intl";

const Values = () => {
  const t = useTranslations("Process");

  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro eyebrow={t("Process30")} title={t("Process31")}>
        <p>{t("Process32")}</p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title={t("Process33")}>{t("Process34")}</GridListItem>
          <GridListItem title={t("Process35")}>{t("Process36")}</GridListItem>
          <GridListItem title={t("Process37")}>{t("Process38")}</GridListItem>
          <GridListItem title={t("Process39")}>{t("Process40")}</GridListItem>
          <GridListItem title={t("Process41")}>{t("Process42")}</GridListItem>
          <GridListItem title={t("Process43")}>{t("Process44")}</GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
