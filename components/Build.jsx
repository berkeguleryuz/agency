import React from "react";
import Section from "./Section";
import imageLaptop from "@/app/images/laptop.jpg";
import Blockquote from "./Blockquote";
import { useTranslations } from "next-intl";

const Build = () => {
  const t = useTranslations("Process");

  return (
    <Section title={t("Process18")} image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        {t("Process14")}
        </p>
        <p>
        {t("Process15")}
        </p>
        <p>
        {t("Process16")}
        </p>
      </div>
      <Blockquote
        author={{ name: "Clodron", role: "DEV"}}
        className="mt-12">
        {t("Process17")}
      </Blockquote>
    </Section>
  );
};

export default Build;
