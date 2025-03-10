import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink } from "react-scroll";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  const { ref, controls, itemVariants } = useScrollAnimation();

  const handleButtonClick = () => {
    const targetElement = document.getElementById("contact");

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 100);
    }
  };

  return (
    <div className="md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_1fr]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="md:order-[1]"
      >
        <Image
          aria-hidden={true}
          src="/assets/images/img14.webp"
          className="block object-cover rounded-[16px] shadow-custom  md:w-full md:h-full"
          intrinsic="true"
          alt="2 janitors cleaning a single room"
          width={535}
          height={407}
          quality={100}
        />
      </motion.div>

      <div className="flex flex-col gap-[24px] md:py-[48px]">
        <div className="flex flex-col gap-[32px] md:text-center md:justify-center md:items-center">
          <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
            <DetailText text={t("aboutSubtitle")} />

            <h2 id="about" className={`item uppercase text-[1.5rem] font-bold`}>
              {t("aboutTitle")}
            </h2>

            <p>{t("aboutDescriptionline1")}</p>
            <p>{t("aboutDescriptionline2")}</p>
            <p>{t("aboutDescriptionline3")}</p>
            <p>{t("aboutDescriptionline4")}</p>
          </div>

          <ScrollLink
            className="btn px-[32px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] text-white w-fit cursor-pointer"
            to="contact"
            tabIndex="0"
            onClick={() => handleButtonClick("contact")}
            offset={-200}
            smooth={true}
          >
            {t("aboutButton")}{" "}
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
