import { LanguageTemplate } from "languages/template"
import { Dispatch, SetStateAction } from "react"

export interface LanguageContextProps {
	language: LanguageTemplate
	setLanguage: Dispatch<SetStateAction<LanguageTemplate>>
}
