import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import AdminField from '../AdminField/AdminField'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className="flex">
			<AdminField
				{...register('slug', {
					required: 'Это поле обязательно',
				})}
				placeholder="Slug"
				error={error}
                
			/>
			<AdminButton text="Сгенерировать slug" onClick={generate} style={{margin: '10px 0'}}/>
		</div>
	)
}
export default SlugField
