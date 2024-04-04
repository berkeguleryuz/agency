import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigaton from "./FooterNavigaton";
import Link from "next/link";
import Logo from "./Logo";
import { useTranslations } from "next-intl";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const t = useTranslations("Footer");

  return (
    <form className="m-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        {t("Footer1")}
      </h2>
      <p className="mt-4 text-sm text-neutral-700">{t("Footer0")}</p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={t("Footer2")}
          autoComplete="email"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition"
            type="submit"
            aria-label="Submit">
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigaton />
          <div className="flex justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end w-full justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8">Clodron</Logo>
          </Link>
          <p className="text-sm text-neutral-700">{t("Footer7")}
</p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
