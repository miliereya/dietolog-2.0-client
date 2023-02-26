import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useEditPackage } from './useEditPackage'
import s from './EditPackage.module.scss'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import LanguagedField from '@/components/admin/LanguagedField/LanguagedField'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import { IEditPackage } from '@/shared/models/package.interface'
import AdminEditPackageOption from './AdminEditPackageOption'

const EditPackage: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IEditPackage>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useEditPackage(setValue)

	const {
		append,
		remove,
		fields: services,
	} = useFieldArray({
		control,
		name: 'services',
	})

	const addOptionHandler = () => {
		append({
			title: { ru: '', ua: '', en: '' },
			price_1: 0,
			price_2: 0,
		})
	}

	return (
		<Meta title="Package edit">
			<AdminNavbar />
			<AdminHeading text="Обновление пакета" />
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
								field="description"
								errors={errors}
								placeholder="Описание"
							/>
							<LanguagedField
								register={register}
								field="heading_1"
								errors={errors}
								placeholder="Заголовок 1"
							/>
							<LanguagedField
								register={register}
								field="heading_2"
								errors={errors}
								placeholder="Заголовок 2"
							/>
							<LanguagedField
								register={register}
								field="sub_heading_1"
								errors={errors}
								placeholder="Подзаголовок 1"
							/>
							<LanguagedField
								register={register}
								field="sub_heading_2"
								errors={errors}
								placeholder="Подзаголовок 2"
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
							{services.map((s, index) => {
								return (
									<AdminEditPackageOption
										removeHandler={remove}
										index={String(index)}
										register={register}
										errors={errors}
										key={s.title.en + index}
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

export default EditPackage
