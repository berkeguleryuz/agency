import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../app/images/laptop.jpg";
import List, { ListItem } from "./List";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <div>
      <SectionIntro
        eyebrow={t("Services")}
        title={t("ServicesT")}
        className="mt-24 sm:mt-32 lg:mt-40">
        <p>
        {t("Services0")}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item ^_^ */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t("ServicesT1")}>
            {t("Services1")}
            </ListItem>
            <ListItem title={t("ServicesT2")}>
            {t("Services2")}
            </ListItem>
            <ListItem title={t("ServicesT3")}>
            {t("Services3")}
            </ListItem>
            <ListItem title={t("ServicesT4")}>
            {t("Services4")}
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  );
};

export default Services;
