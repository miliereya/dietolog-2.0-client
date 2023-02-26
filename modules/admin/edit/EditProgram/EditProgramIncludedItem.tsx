import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { FC } from 'react'
import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'
import LanguagedField from '../../../../components/admin/LanguagedField/LanguagedField'

interface EditIncludedItemProps {
	index: string
	removeHandler: UseFieldArrayRemove
	register: UseFormRegister<any>
	errors: any
}

const EditIncludedItem: FC<EditIncludedItemProps> = ({
	index,
	removeHandler,
	register,
	errors,
}) => {
	return (
		<div>
			<LanguagedField
				register={register}
				field={`included.${index}`}
				errors={errors}
				placeholder={`Опция ${parseInt(index) + 1}`}
			/>
			<AdminButton
				text="Удалить опцию"
				onClick={() => removeHandler(parseInt(index))}
			/>
		</div>
	)
}
export default EditIncludedItem
