import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Aluguel() {
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
            <h1 className="text-4xl font-extrabold tracking-tight mb-6" id="aluguel-de-roupa">{t("titleLaundry")}</h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#555555] leading-relaxed">
              {t("descriptionLaundry")}
            </p>
          </div>

{/* Seção de Tabelas e Informações */}
<div className="flex flex-wrap gap-12">
    {/* Primeira Tabela */}
    <div className="w-full sm:w-1/2 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-start">
        <Image src="/assets/images/vector16.svg" alt="Ícone Pacote" width={24} height={24} className="mr-2" />
        {t("tariffsLaundrytitletable1")}
      </h2>
      <div className="overflow-x-auto border-t-8 border-[#4CAF50] rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-sm">
    <thead className="bg-[#4CAF50] text-white">
      <tr>
        <th className="py-5 px-6 font-semibold">{t("packageAluguell")}</th>
        <th className="py-5 px-6 font-semibold">{t("descriptionAluguell")}</th>
        <th className="py-5 px-6 font-semibold">{t("priceAluguell")}</th>
      </tr>
    </thead>
    <tbody className="text-[#4f4f4f]">
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageDuo")}</td>
        <td className="py-4 px-6">{t("packageDescriptionDuo")}</td>
        <td className="py-4 px-6 text-center">{t("priceDuo")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageLargeBed")}</td>
        <td className="py-4 px-6">{t("packageDescriptionLargeBed")}</td>
        <td className="py-4 px-6 text-center">{t("priceLargeBed")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageSmallBed")}</td>
        <td className="py-4 px-6">{t("packageDescriptionSmallBed")}</td>
        <td className="py-4 px-6 text-center">{t("priceSmallBed")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageBathTwoPeople")}</td>
        <td className="py-4 px-6">{t("packageDescriptionBathTwoPeople")}</td>
        <td className="py-4 px-6 text-center">{t("priceBathTwoPeople")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageBathOnePerson")}</td>
        <td className="py-4 px-6">{t("packageDescriptionBathOnePerson")}</td>
        <td className="py-4 px-6 text-center">{t("priceBathOnePerson")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("packageKitchenTowels")}</td>
        <td className="py-4 px-6">{t("packageDescriptionKitchenTowels")}</td>
        <td className="py-4 px-6 text-center">{t("priceKitchenTowels")}</td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>

    {/* Segunda Tabela */}
    <div className="w-full sm:w-1/2 lg:w-1/2 flex-1 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-start">
        <Image src="/assets/images/vector16.svg" alt="Ícone Preço" width={24} height={24} className="mr-2" />
        {t("tariffsLaundrytitletable2")}
      </h2>
      <div className="overflow-x-auto border-t-8 border-[#4CAF50] rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-sm">
    <thead className="bg-[#4CAF50] text-white">
      <tr>
        <th className="py-5 px-6 font-semibold">{t("packageAluguell")}</th>
        <th className="py-5 px-6 font-semibold">{t("descriptionAluguell")}</th>
        <th className="py-5 px-6 font-semibold">{t("priceAluguell")}</th>
      </tr>
    </thead>
    <tbody className="text-[#4f4f4f]">
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemDuvet")}</td>
        <td className="py-4 px-6">{t("itemDescriptionDuvet")}</td>
        <td className="py-4 px-6 text-center">{t("priceDuvet")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemDuvetCoverLarge")}</td>
        <td className="py-4 px-6">{t("itemDescriptionDuvetCoverLarge")}</td>
        <td className="py-4 px-6 text-center">{t("priceDuvetCoverLarge")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemDuvetCoverSmall")}</td>
        <td className="py-4 px-6">{t("itemDescriptionDuvetCoverSmall")}</td>
        <td className="py-4 px-6 text-center">{t("priceDuvetCoverSmall")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemSheetLarge")}</td>
        <td className="py-4 px-6">{t("itemDescriptionSheetLarge")}</td>
        <td className="py-4 px-6 text-center">{t("priceSheetLarge")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemSheetSmall")}</td>
        <td className="py-4 px-6">{t("itemDescriptionSheetSmall")}</td>
        <td className="py-4 px-6 text-center">{t("priceSheetSmall")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemBeachTowel")}</td>
        <td className="py-4 px-6">{t("itemDescriptionBeachTowel")}</td>
        <td className="py-4 px-6 text-center">{t("priceBeachTowel")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemBathTowel")}</td>
        <td className="py-4 px-6">{t("itemDescriptionBathTowel")}</td>
        <td className="py-4 px-6 text-center">{t("priceBathTowel")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemBathMat")}</td>
        <td className="py-4 px-6">{t("itemDescriptionBathMat")}</td>
        <td className="py-4 px-6 text-center">{t("priceBathMat")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemPillowcase")}</td>
        <td className="py-4 px-6">{t("itemDescriptionPillowcase")}</td>
        <td className="py-4 px-6 text-center">{t("pricePillowcase")}</td>
      </tr>
      <tr className="hover:bg-[#f2f3f7] transition-all">
        <td className="py-4 px-6">{t("itemKitchenCloth")}</td>
        <td className="py-4 px-6">{t("itemDescriptionKitchenCloth")}</td>
        <td className="py-4 px-6 text-center">{t("priceKitchenCloth")}</td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>
    </div>

    <div className="flex flex-wrap gap-12">
    {/* Terceira Tabela */}
    <div className="w-full sm:w-1/2 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-start">
        <Image src="/assets/images/vector16.svg" alt="Ícone Bebê" width={24} height={24} className="mr-2" />
        {t("tariffsLaundrytitletable3")}
      </h2>
      <div className="overflow-x-auto border-t-8 border-[#4CAF50] rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-[#4CAF50] text-white">
          <tr>
            <th className="py-5 px-6 font-semibold">{t("packageAluguell")}</th>
            <th className="py-5 px-6 font-semibold">{t("descriptionAluguell")}</th>
            <th className="py-5 px-6 font-semibold">{t("priceAluguell")}</th>
          </tr>
        </thead>
        <tbody className="text-[#4f4f4f]">
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("babyItemCrib")}</td>
            <td className="py-4 px-6">{t("babyItemDescriptionCrib")}</td>
            <td className="py-4 px-6 text-center">{t("priceBabyCrib")}</td>
          </tr>
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("babyItemBedSet")}</td>
            <td className="py-4 px-6">{t("babyItemDescriptionBedSet")}</td>
            <td className="py-4 px-6 text-center">{t("priceBabyBedSet")}</td>
          </tr>
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("babyItemHighChair")}</td>
            <td className="py-4 px-6">{t("babyItemDescriptionHighChair")}</td>
            <td className="py-4 px-6 text-center">{t("priceBabyHighChair")}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>

    {/* Quarta Tabela */}
    <div className="w-full sm:w-1/2 lg:w-1/2 flex-1 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10 flex items-center justify-start">
        <Image src="/assets/images/vector16.svg" alt="Ícone Produtos" width={24} height={24} className="mr-2" />
        {t("tariffsLaundrytitletable4")}
      </h2>
      
      <div className="overflow-x-auto border-t-8 border-[#4CAF50] rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-[#4CAF50] text-white">
          <tr>
            <th className="py-5 px-6 font-semibold">{t("packageAluguell")}</th>
            <th className="py-5 px-6 font-semibold">{t("descriptionAluguell")}</th>
            <th className="py-5 px-6 font-semibold">{t("priceAluguell")}</th>
          </tr>
        </thead>
        <tbody className="text-[#4f4f4f]">
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("consumableSoap")}</td>
            <td className="py-4 px-6">{t("consumableDescriptionSoap")}</td>
            <td className="py-4 px-6 text-center">{t("priceSoap")}</td>
          </tr>
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("consumableHandSoap")}</td>
            <td className="py-4 px-6">{t("consumableDescriptionHandSoap")}</td>
            <td className="py-4 px-6 text-center">{t("priceHandSoap")}</td>
          </tr>
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("consumablePaperTowel")}</td>
            <td className="py-4 px-6">{t("consumableDescriptionPaperTowel")}</td>
            <td className="py-4 px-6 text-center">{t("pricePaperTowel")}</td>
          </tr>
          <tr className="hover:bg-[#f2f3f7] transition-all">
            <td className="py-4 px-6">{t("consumableToiletPaper")}</td>
            <td className="py-4 px-6">{t("consumableDescriptionToiletPaper")}</td>
            <td className="py-4 px-6 text-center">{t("priceToiletPaper")}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>

            {/* Condições Finais */}
            <div className="w-full bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-[#4CAF50] mb-10">{t("rentalConditionss")}</h2>
              <ul className="list-disc pl-6 space-y-4 text-[#555555]">
                <li>{t("rentalCondition1")}</li>
                <li>{t("rentalCondition2")}</li>
                <li>{t("rentalCondition3")}</li>
                <li>{t("rentalCondition4")}</li>
              </ul>
              <p className="mt-6 text-[#555555]">{t("finalNotes")}</p>
            </div>

          </div>
        </div>
      </div>
  );
}