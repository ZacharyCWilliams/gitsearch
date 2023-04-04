import { CONFIGURATION } from "../__fixtures__/configuration";

export const getLanguageColor = (language: string): string => {
  return (
    CONFIGURATION.languageIcon[language.toLowerCase()] ||
    CONFIGURATION.languageIcon.other
  );
};