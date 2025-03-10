import { useState } from "react"; // Import useState  
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PrivacyModalManager from "@/components/pages/home/ContactLower/components/PrivacyModalManager";
import {
  formFields,
  initialValues,
} from "@/components/pages/home/ContactLower/components/formFieldsConfig";
import { getValidationSchema } from "@/components/pages/home/ContactLower/components/validationSchemas";
import { useRouter } from "next/router"; // Import useRouter to get the locale

export default function ContactLower() {
  const { t } = useTranslation();
  const [submissionError, setSubmissionError] = useState(""); // useState to handle errors
  const legalLinks = t("legalLinks", { returnObjects: true });
  const router = useRouter(); // Initialize the router
  const { locale } = router; // Get the current locale
  const [selectedService, setSelectedService] = useState(""); // State to track selected service

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = { ...values };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitting(false);

          // Redirect to thank you page with the current locale
          router.push(`/${locale}/thankyou`); // Redirect including the locale
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmissionError(t("submissionError"));
          setSubmitting(false);
        }
      )
      .catch((error) => {
        console.log("ERROR...", error);
        setSubmissionError(t("submissionError"));
        setSubmitting(false);
      });
  };

  const filteredFormFields = formFields.filter((field) =>
    ["fullName", "email", "serviceType", "message"].includes(field.name)
  );

  const renderFormFields = (fields) => {
    return fields?.map((field, index) => (
      <div key={index} className="flex flex-col gap-[12px]">
        <label className="text-[1rem]" htmlFor={field.name}>
          {t(field.label)}{" "}
          {field.required && (
            <span aria-hidden={true} className="text-color02">
              *
            </span>
          )}
        </label>
        {field.name === "serviceType" ? (
          <div className="flex gap-[8px]">
            <button
              type="button"
              className={`px-[14px] py-[12px] w-[170px] rounded-[6px] border-[1px] ${
                selectedService === "rental"
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-[#F2F2F2] text-black border-color03"
              }`}
              onClick={() => setSelectedService("rental")}
            >
              {t("rentalService")}
            </button>
            <button
              type="button"
              className={`px-[14px] py-[12px] w-[170px] rounded-[6px] border-[1px] ${
                selectedService === "laundry"
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-[#F2F2F2] text-black border-color03"
              }`}
              onClick={() => setSelectedService("laundry")}
            >
              {t("laundryService")}
            </button>
          </div>
        ) : field.type === "text" ||
          field.type === "email" ||
          field.type === "number" ||
          field.type === "tel" ||
          field.type === "date" ? (
          <Field
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] placeholder-text-opacity-[0.5] rounded-[6px] focus-visible:outline-color01 border-color03 border-solid border-[1px] bg-[#F2F2F2]"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : field.type === "textarea" ? (
          <Field
            as="textarea"
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] placeholder-text-opacity-[0.5] rounded-[6px] focus-visible:outline-color01 border-color03 border-solid border-[1px] h-[150px] resize-none bg-[#F2F2F2]"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : null}
        <ErrorMessage
          name={field.name}
          className="text-[#FF4C4C]"
          render={(msg) => (
            <p role="alert" className="text-[#FF4C4C]">
              {msg}: &quot;{t(field.label)}&quot;
            </p>
          )}
        />
      </div>
    ));
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(t)}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
          actions.setSubmitting(false);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form className="w-full p-[24px] border-solid border-color03 border-[1px] flex flex-col gap-[32px] shadow-custom rounded-[16px]">
            <div className="flex flex-col gap-[12px]">
              {renderFormFields(filteredFormFields)}
              <button
                type="submit"
                className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[14px] text-white w-full md:w-fit"
                disabled={isSubmitting}
              >
                {t("submit")}
              </button>

              <PrivacyModalManager legalLinks={legalLinks} />

              {submissionError && (
                <p className="text-[#FF4C4C]">{submissionError}</p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}