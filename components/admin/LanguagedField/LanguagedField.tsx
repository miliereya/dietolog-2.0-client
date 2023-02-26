import AdminField from '@/ui/Fields/AdminField/AdminField'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import s from './LanguagedField.module.scss'

interface LanguagedFieldProps {
	register: UseFormRegister<any>
	field: string
	errors: FieldErrors<any>
	placeholder: string
}

const LanguagedField: FC<LanguagedFieldProps> = ({
	register,
	field,
	errors,
	placeholder,
}) => {
	return (
		<div className={s.wrapper}>
			<AdminField
                style={{
                    width: '30%'
                }}
				{...register(`${field}.ru`, {
					required: `Поле ${field} обязательно`,
				})}
				placeholder={`${placeholder} (ru)`}
				error={errors[`${field}.ru`]}
			/>
			<AdminField
                 style={{
                    width: '30%'
                }}
				{...register(`${field}.ua`, {
					required: `Поле ${field} обязательно`,
				})}
				placeholder={`${placeholder} (ua)`}
				error={errors[`${field}.ua`]}
			/>
			<AdminField
                 style={{
                    width: '30%'
                }}
				{...register(`${field}.en`, {
					required: `Поле ${field} обязательно`,
				})}
				placeholder={`${placeholder} (en)`}
				error={errors[`${field}.en`]}
			/>
		</div>
	)
}
export default LanguagedField
