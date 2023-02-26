import { InputHTMLAttributes } from 'react'

export interface IAdminField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: any
}
