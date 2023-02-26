import { FC, HTMLAttributes } from 'react'

import cn from 'classnames'
import s from './AdminButton.module.scss'

interface AdminButtonProps extends HTMLAttributes<HTMLButtonElement> {
	additionClassName?: string
	text: string
	isSubmit?: boolean
}

const AdminButton: FC<AdminButtonProps> = ({
	additionClassName,
	text,
	isSubmit = false,
	...rest
}) => {
	return (
		<button
			className={cn(s.btn, additionClassName)}
			{...rest}
			type={isSubmit ? 'submit' : 'button'}
		>
			{text}
		</button>
	)
}

export default AdminButton
