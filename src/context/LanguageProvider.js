import { createContext, useContext,  useEffect,  useState } from "react";
import { languageOptions } from "../languages/options";

export const initialState = {
    language: 'en',
    dictionary: languageOptions.english
}

export const LanguageContext = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [dictionary, setDictionary] = useState(languageOptions.english);
  
  const provider = {
    language,
    changeLanguage: languageStr => {
      setLanguage(languageStr)
      if(languageStr=='pl'){
        setDictionary(languageOptions.polish)
      } else {
        setDictionary(languageOptions.english)
      }
    }
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )};
  