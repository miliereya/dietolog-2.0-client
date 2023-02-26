import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import Meta from '@/utils/meta/Meta'
import { FC, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useEditConsultation } from './useEditConsultation'
import s from './EditConsultation.module.scss'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import LanguagedField from '@/components/admin/LanguagedField/LanguagedField'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import UploadField from '@/ui/Fields/UploadField/UploadField'
import { IEditConsultation } from '@/shared/models/consultation.interface'
import AdminField from '@/ui/Fields/AdminField/AdminField'
import { ILanguagedString } from 'languages/template'
import AdminEditOption from '@/components/admin/AdminEditOption/AdminEditOption'

const EditConsultation: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IEditConsultation>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useEditConsultation(setValue)

	const {
		append,
		remove,
		fields: options,
	} = useFieldArray({
		control,
		name: 'options',
	})

	const addOptionHandler = () => {
		append({
			ru: '',
			ua: '',
			en: '',
		})
	}

	return (
		<Meta title="Consultation edit">
			<AdminNavbar />
			<AdminHeading text="Обновление консультации" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? null : (
					<>
						<div className={s.fields}>
							<LanguagedField
								register={register}
								field="title"
								errors={errors}
								placeholder="Название"
							/>
							<LanguagedField
								register={register}
								field="type"
								errors={errors}
								placeholder="Формат"
							/>
							<AdminField
								style={{
									width: '30%',
								}}
								{...register('price', {
									required: `Это поле обязательно`,
								})}
								placeholder="Цена"
								error={errors.price}
							/>
						</div>
						<AdminButton
							style={{
								marginBottom: '50px',
							}}
							text="Добавить опцию"
							onClick={addOptionHandler}
						/>
						<div className={s.options}>
							{options.map((o, index) => {
								return (
									<AdminEditOption
										removeHandler={remove}
										index={String(index)}
										control={control}
										key={o.en + index}
									/>
								)
							})}
						</div>
						<AdminButton
							style={{
								marginTop: '50px',
								fontSize: '20px',
							}}
							text="Обновить"
							isSubmit
						/>
					</>
				)}
			</form>
		</Meta>
	)
}

export default EditConsultation
