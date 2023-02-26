import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import s from './LanguagedTextEditor.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/ui/Fields/TextEditor/TextEditor'),
	{
		ssr: false,
	}
)

interface LanguagedTextEditorProps {
	control: Control<any, any>
	index?: string
	name?: string
}

const LanguagedTextEditor: FC<LanguagedTextEditorProps> = ({
	control,
	index,
	name,
}) => {
	return (
		<div className={s.wrapper}>
			<Controller
				control={control}
				name={name ? `${name}.ru` : `options.${index}.ru`}
				defaultValue=""
				render={({
					field: { value, onChange },
					fieldState: { error },
				}) => (
					<DynamicTextEditor
						onChange={onChange}
						value={value}
						error={error}
						placeholder={
							index
								? name || `Опция ${parseInt(index) + 1} (ru)`
								: ''
						}
					/>
				)}
				rules={{
					validate: {
						required: (v) =>
							(v && stripHtml(v).result.length > 0) ||
							`Обязательное поле`,
					},
				}}
			/>
			<Controller
				control={control}
				name={name ? `${name}.ua` : `options.${index}.ua`}
				defaultValue=""
				render={({
					field: { value, onChange },
					fieldState: { error },
				}) => (
					<DynamicTextEditor
						onChange={onChange}
						value={value}
						error={error}
						placeholder={
							index
								? name || `Опция ${parseInt(index) + 1} (ua)`
								: ''
						}
					/>
				)}
				rules={{
					validate: {
						required: (v) =>
							(v && stripHtml(v).result.length > 0) ||
							`Обязательное поле`,
					},
				}}
			/>
			<Controller
				control={control}
				name={name ? `${name}.en` : `options.${index}.en`}
				defaultValue=""
				render={({
					field: { value, onChange },
					fieldState: { error },
				}) => (
					<DynamicTextEditor
						onChange={onChange}
						value={value}
						error={error}
						placeholder={
							index
								? name || `Опция ${parseInt(index) + 1} (en)`
								: ''
						}
					/>
				)}
				rules={{
					validate: {
						required: (v) =>
							(v && stripHtml(v).result.length > 0) ||
							`Обязательное поле`,
					},
				}}
			/>
		</div>
	)
}
export default LanguagedTextEditor
