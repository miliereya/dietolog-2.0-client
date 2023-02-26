import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { FC } from 'react'
import {
	Control,
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form'
import LanguagedField from '../LanguagedField/LanguagedField'
import LanguagedTextEditor from '../LanguagedTextEditor/LanguagedTextEditor'

interface AdminEditOptionProps {
	control: Control<any, any>
	index: string
	removeHandler: UseFieldArrayRemove
}

const AdminEditOption: FC<AdminEditOptionProps> = ({
	control,
	index,
	removeHandler,
}) => {
	return (
		<div>
			<LanguagedTextEditor control={control} index={index} />
			<AdminButton
				text="Удалить опцию"
				onClick={() => removeHandler(parseInt(index))}
			/>
		</div>
	)
}
export default AdminEditOption
