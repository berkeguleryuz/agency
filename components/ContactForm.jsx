"use client";
import React, { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("Contact");
  const timerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("Email sent successfully");
    } catch (error) {
      console.error(error);
      setErrorMessage(t("Contact16"));
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("Contact8")}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t("Contact9")} name="name" autoComplete="name" />
          <TextInput
            label={t("Contact10")}
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextInput
            label={t("Contact11")}
            name="company"
            autoComplete="organization"
            onChange={handleChange}
          />
          <TextInput
            label={t("Contact12")}
            type="tel"
            name="phone"
            autoComplete="tel"
            onChange={handleChange}
          />
          <TextInput
            label={t("Contact13")}
            name="message"
            onChange={handleChange}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                {t("Contact14")}
              </legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="$1K – $50K"
                name="budget"
                value="1-50K"
                onChange={handleChange}
              />
              <RadioInput
                label="$50K – $100K"
                name="budget"
                value="50 - 100K"
                onChange={handleChange}
              />
              <RadioInput
                label="$100K – $150K"
                name="budget"
                value="100 - 150K"
                onChange={handleChange}
              />
              <RadioInput
                label="$150K+"
                name="budget"
                value="150K+"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          {t("Contact15")}
        </Button>
      </form>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </FadeIn>
  );
};

export default ContactForm;
