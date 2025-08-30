import { SET_LANGUAGE } from "./languageReducer";


export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language,
});
