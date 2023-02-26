import cn from 'classnames'
import { forwardRef } from 'react'
import { IAdminField } from './admin-field.interface'

import s from './AdminField.module.scss'

const AdminField = forwardRef<HTMLInputElement, IAdminField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(s.common, s.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input
						ref={ref}
						type={type}
						{...rest}
						className="autofill:bg-transparent"
					/>
				</label>
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)

AdminField.displayName = 'AdminField'

export default AdminField
