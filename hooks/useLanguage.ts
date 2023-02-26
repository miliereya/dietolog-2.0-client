import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'
import { useContext } from 'react'

export const useLanguage = () => useContext(LanguageContext).language
