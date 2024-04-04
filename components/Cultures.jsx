import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import { useTranslations } from "next-intl";

const Cultures = () => {
  const t = useTranslations("Culture");

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow={t("Culture0")} title={t("Culture1")} invert>
        <p>{t("Culture2")}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t("Culture3")} invert>
            {t("Culture4")}
          </GridListItem>
          <GridListItem title={t("Culture5")} invert>
            {t("Culture6")}
          </GridListItem>
          <GridListItem title={t("Culture7")} invert>
            {t("Culture8")}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
