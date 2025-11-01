import { useTranslation } from "react-i18next";
import featureCardsData from "../data/featureCardsData";
import { goalsData } from "../data/goalsData";
import opportunitiesCardsData from "../data/opportunitiesCardsData";
import schoolCardsData from "../data/schoolCardsData";
import ceramicsCardsData from "../data/ceramicsCardsData";
import contactSectionData from "../data/contactSectionData";

export const useLanguageData = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Fallback to English if language data doesn't exist
  const getData = (dataObject) => {
    return dataObject[currentLanguage] || dataObject.en;
  };

  return {
    featureCardsData: getData(featureCardsData),
    goalsData: getData(goalsData),
    opportunitiesCardsData: getData(opportunitiesCardsData),
    schoolCardsData: getData(schoolCardsData),
    ceramicsCardsData: getData(ceramicsCardsData),
    contactSectionData: getData(contactSectionData),
  };
};
