import { createContext, useState } from "react";
import { languageOptions } from "../languages/options";

export const initialState = {
  language: "English",
  dictionary: languageOptions.english,
};

export const LanguageContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialState.language);
  const [dictionary, setDictionary] = useState(languageOptions.english);

  const provider = {
    language,
    dictionary,
    changeLanguage: (languageStr) => {
      setLanguage(languageStr);
      if (languageStr === "Polski") {
        setDictionary(languageOptions.polish);
      } else {
        setDictionary(languageOptions.english);
      }
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
