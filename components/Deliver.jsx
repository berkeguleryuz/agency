import React from "react";
import Section from "./Section";
import imageMeeting from "@/app/images/meeting.jpg";
import List, { ListItem } from "./List";
import { useTranslations } from "next-intl";

const Deliver = () => {
  const t = useTranslations("Process");

  return (
    <Section title={t("Process19")} image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{t("Process20")}</p>
        <p>{t("Process21")}</p>
        <p>{t("Process22")}</p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        {t("Process23")}
      </h3>
      <List>
        <ListItem title={t("Process24")}>{t("Process25")}</ListItem>
        <ListItem title={t("Process26")}>{t("Process27")}</ListItem>
        <ListItem title={t("Process28")}>{t("Process29")}</ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
