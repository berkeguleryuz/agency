import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { useTranslations } from "next-intl";
import React from "react";

const ContactPage = () => {
  const t = useTranslations("Contact"); 

  return (
    <div>
      <PageIntro eyebrow={t("Contact0")} title={t("Contact1")}>
        <p>{t("Contact2")}</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
