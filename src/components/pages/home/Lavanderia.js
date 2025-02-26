import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Lavanderia() {
  const { t } = useTranslation();

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
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex flex-col gap-16">

          {/* Título e Descrição */}
          <div className="text-center text-[#3f3f3f]">
            <h1 className="text-4xl font-extrabold tracking-tight mb-6" id="lavanderia">{t("titlelaundryservice")}</h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#555555] leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Seção de Pacotes e Tarifas */}
          <div className=" flex flex-wrap gap-12">

            {/* Descrição e tabela de preços */}
            <div className="w-full sm:w-1/2 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-start">
                <Image src="/assets/images/vector16.svg" alt="Ícone Pacote" width={24} height={24} className="mr-2" />
                {t("rates")}
              </h2>
              <p className="text-1x1 text-[#666666] mb-10">{t("packageDescription")}</p>

              {/* Tabela de Preços */}
              <div className="overflow-x-auto border-t-8 border-[#4CAF50] rounded-xl shadow-lg">
                <table className="min-w-full table-auto text-sm">
                  <thead className="bg-[#4CAF50] text-white">
                    <tr>
                      <th className="py-5 px-6 font-semibold">{t("serviceDescriptionPrice")}</th>
                      <th className="py-5 px-6 font-semibold">{t("largebedkit")}</th>
                      <th className="py-5 px-6 font-semibold">{t("smallbedkit")}</th>
                      <th className="py-5 px-6 font-semibold">{t("duokit")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#4f4f4f]">
                    <tr className="hover:bg-[#f2f3f7] transition-all">
                      <td className="py-4 px-6">{t("largebedkitDescription")}</td>
                      <td className="py-4 px-6 text-center">{t("largebedkitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("smallbedkitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("duokitPrice")}</td>
                    </tr>
                    <tr className="hover:bg-[#f2f3f7] transition-all">
                      <td className="py-4 px-6">{t("smallbedkitDescription")}</td>
                      <td className="py-4 px-6 text-center">{t("smallbedkitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("smallbedkitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("duokitPrice")}</td>
                    </tr>
                    <tr className="hover:bg-[#f2f3f7] transition-all">
                      <td className="py-4 px-6">{t("duokitDescription")}</td>
                      <td className="py-4 px-6 text-center">{t("duokitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("duokitPrice")}</td>
                      <td className="py-4 px-6 text-center">{t("duokitPrice")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Preço por Item */}
            <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-center">
                <Image src="/assets/images/vector16.svg" alt="Ícone Preço" width={24} height={24} className="mr-2" />
                {t("priceperitem")}
              </h3>
              <ul className="space-y-6">
                {[
                  { name: t("pillowcase"), desc: t("pillowcaseDescription"), price: t("pillowcasePrice") },
                  { name: t("duvetcover"), desc: t("duvetcoverDescription"), price: t("duvetcoverPrice") },
                  { name: t("tablecloth"), desc: t("tableclothDescription"), price: t("tableclothPrice") },
                  { name: t("sheetorfittedsheet"), desc: t("sheetorfittedsheetDescription"), price: t("sheetorfittedsheetPrice") },
                  { name: t("dishcloth"), desc: t("dishclothDescription"), price: t("dishclothPrice") },
                  { name: t("bathtowel"), desc: t("bathtowelDescription"), price: t("bathtowelPrice") },
                  { name: t("handtowel"), desc: t("handtowelDescription"), price: t("handtowelPrice") },
                  { name: t("duvet"), desc: t("duvetDescription"), price: t("duvetPrice") },
                  { name: t("mattressprotector"), desc: t("mattressprotectorDescription"), price: t("mattressprotectorPrice") },
                  { name: t("bathmat"), desc: t("bathmatDescription"), price: t("bathmatPrice") },
                  { name: t("pillowprotector"), desc: t("pillowprotectorDescription"), price: t("pillowprotectorPrice") }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-[#555555] border-b pb-4 mb-4 last:border-none">
                    <div>
                      <span className="font-semibold text-[#4CAF50]">{item.name}</span>
                      <p className="text-sm text-[#7d7d7d]">{item.desc}</p>
                    </div>
                    <span className="text-[#4CAF50]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}