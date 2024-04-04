import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { useTranslations } from "next-intl";

const ContactDetails = () => {
  const t = useTranslations("Contact");

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        {t("Contact3")}
      </h2>
      <p className="mt-6 text-base text-neutral-600">{t("Contact4")}</p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("Contact5")}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
              <dt className="font-semibold text-neutral-950">
                {t("Contact6")}
              </dt>
              <dd>
                <Link
                  href="mailto:info@clodron.com"
                  className="text-neutral-600 hover:text-neutral-950">
                  info@clodron.com
                </Link>
              </dd>
              <dt className="font-semibold text-neutral-950">
                {t("Contact7")}
              </dt>
              <dd>
                <Link
                  href="mailto:berke@clodron.com"
                  className="text-neutral-600 hover:text-neutral-950">
                  berke@clodron.com
                </Link>
              </dd>
        </dl>
      </Border>
      <Border className="mt-16 pt-16" />
    </FadeIn>
  );
};

export default ContactDetails;
