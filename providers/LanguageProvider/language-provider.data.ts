import { ua } from "languages/ua";
import { LanguageContextProps } from "./language-provider.interface";

export const LanguageContextInitialValue: LanguageContextProps = {
	language: ua,
	setLanguage: () => {},
}
