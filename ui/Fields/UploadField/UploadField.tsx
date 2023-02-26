import cn from 'classnames'
import Image from 'next/image'
import { FC, useRef } from 'react'

import s from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'

import { useUpload } from './useUpload'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	value,
	isNoImage = false,
	style,
}) => {
	const { isLoading, uploadFile, deleteFile } = useUpload(onChange, folder)

	const fileRef = useRef<HTMLInputElement>(null)

	return (
		<div className={cn(s.field, s.uploadField)} style={style}>
			<div className={s.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} ref={fileRef} />
					{error && <div className={s.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={s.uploadImageContainer}>
						{isLoading
							? null
							: value && (
									<Image
										alt=""
										src={value}
										fill
										unoptimized
									/>
							  )}
					</div>
				)}
			</div>
		</div>
	)
}
export default UploadField
