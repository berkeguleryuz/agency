"use client";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
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
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
      } else {
        throw new Error("E-mail did not send hatası");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("E-mail did not send");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            onChange={handleChange}
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" onChange={handleChange}/>
          <TextInput label="Message" name="message" onChange={handleChange} />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$25K – $50K" name="budget" value="25" onChange={handleChange} />
              <RadioInput label="$50K – $100K" name="budget" value="50" onChange={handleChange} />
              <RadioInput label="$100K – $150K" name="budget" value="100" onChange={handleChange} />
              <RadioInput label="More than $150K" name="budget" value="150" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </FadeIn>
  );
};

export default ContactForm;
