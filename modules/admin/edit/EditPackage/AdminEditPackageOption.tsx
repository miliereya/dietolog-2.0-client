import { IEditPackage } from '@/shared/models/package.interface'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import AdminField from '@/ui/Fields/AdminField/AdminField'
import { FC } from 'react'
import {
	Control,
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form'
import LanguagedField from '../../../../components/admin/LanguagedField/LanguagedField'
import LanguagedTextEditor from '../../../../components/admin/LanguagedTextEditor/LanguagedTextEditor'

interface AdminEditOptionPackageProps {
	index: string
	removeHandler: UseFieldArrayRemove
	register: UseFormRegister<any>
	errors: any
}

const AdminEditPackageOption: FC<AdminEditOptionPackageProps> = ({
	index,
	removeHandler,
	register,
	errors,
}) => {

	return (
		<div>
			<LanguagedField
				register={register}
				field={`services.${index}.title`}
				errors={errors}
				placeholder={`Услуга ${parseInt(index) + 1}`}
			/>
			<AdminField
				style={{
					width: '30%',
				}}
				{...register(`services.${index}.price_1`, {
					required: `Это поле обязательно`,
				})}
				placeholder="Цена 1"
			/>
			<AdminField
				style={{
					width: '30%',
				}}
				{...register(`services.${index}.price_2`, {
					required: `Это поле обязательно`,
				})}
				placeholder="Цена 2"
			/>
			<AdminButton
				text="Удалить опцию"
				onClick={() => removeHandler(parseInt(index))}
			/>
		</div>
	)
}
export default AdminEditPackageOption
