import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { FC } from 'react'
import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'
import LanguagedField from '../../../../components/admin/LanguagedField/LanguagedField'

interface EditProgramOptionItemProps {
	index: string
	radioIndex: string
	removeHandler: UseFieldArrayRemove
	register: UseFormRegister<any>
	errors: any
}

import s from './EditProgram.module.scss'

const EditProgramOptionItem: FC<EditProgramOptionItemProps> = ({
	index,
	removeHandler,
	register,
	errors,
	radioIndex,
}) => {
	return (
		<div className={s.radio}>
			<LanguagedField
				register={register}
				field={`radios.${radioIndex}.options.${index}.answer`}
				errors={errors}
				placeholder={`Ответ ${parseInt(index) + 1}`}
			/>
			<LanguagedField
				register={register}
				field={`radios.${radioIndex}.options.${index}.answer_short`}
				errors={errors}
				placeholder={`Ответ ${parseInt(index) + 1}сокр.`}
			/>
			<AdminButton
				text="Удалить ответ"
				onClick={() => removeHandler(parseInt(index))}
			/>
		</div>
	)
}
export default EditProgramOptionItem
