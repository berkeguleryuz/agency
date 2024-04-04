"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import clsx from "clsx";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import Offices from "./Offices";
import Footer from "./Footer";
import {
  NextIntlClientProvider,
  useTranslations,
  useMessages,
  useTimeZone,
} from "next-intl";
import { Link } from "../navigation";

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  const t = useTranslations("Button");

  // Container
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} aria-label="Home">
          <Logo invert={invert}>Clodron</Logo>
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href={"/contact"} invert={invert}>
            {t("Button0")}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10",
            )}
            aria-label="Toggle navigation">
            <Icon
              className={clsx(
                "h-6 w-6",
                invert
                  ? "fill-white group-hover:fill-neutral-200"
                  : "fill-neutral-950 group-hover:fill-neutral-700",
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children, locale }) => {
  return (
    <Link
      locale={locale}
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-1 sm:even:border-neutral-800 sm:even:pl-16">
      {children}
      <span className="absolute inset-7-9 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-o group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const Navigation = () => {
  const t = useTranslations("Navigation");
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href={"/work"}>{t("Navigation0")}</NavigationItem>
        <NavigationItem href={"/about"}>{t("Navigation1")}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={"/process"}>{t("Navigation2")}</NavigationItem>
        <NavigationItem href={"/contact"}>{t("Navigation3")}</NavigationItem>
      </NavigationRow>
      {/* <LocaleSwitcherSelect /> */}
    </nav>
  );
};

const RootLayoutInner = ({ children, locale = "en" }) => {
  const messages = useMessages();
  const timeZone = useTimeZone();

  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.addEventListener("click", onClick);
    };
  }, []);
  const t = useTranslations("Offices");

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={timeZone}>
        <header>
          <div
            className="absolute left-0 right-0 top-2 z-40 pt-14"
            aria-hidden={expanded ? "true" : undefined}
            inert={expanded ? "" : undefined}>
            {/* Header */}
            <Header
              panelId={panelId}
              icon={HiMenuAlt4}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded);
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                );
              }}
            />
          </div>
          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? "auto" : "0.5rem" }}
            className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
            aria-hidden={expanded ? undefined : "true"}
            inert={expanded ? undefined : ""}>
            <motion.div layout className="bg-neutral-800">
              <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
                <Header
                  invert
                  panelId={panelId}
                  icon={IoMdClose}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded);
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true }),
                    );
                  }}
                />
              </div>
              {/* Navigation */}
              <Navigation />
              <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                <Container>
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        {t("Offices")}
                      </h2>
                      <Offices
                        invert
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      />
                    </div>
                    <div className="sm:border-1 sm:-border-transparent sm:pl-16">
                      {/* <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert /> */}
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>
        <motion.div
          layout
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden bg-white pt-14">
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9">
            <main className="w-full flex-auto">{children}</main>
            {/* Footer */}
            <Footer />
          </motion.div>
        </motion.div>
      </NextIntlClientProvider>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
