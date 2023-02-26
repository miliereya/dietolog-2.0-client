import { FC, HTMLAttributes } from 'react'

import cn from 'classnames'
import s from './ActionButton.module.scss'

export interface ActionButtonProps extends HTMLAttributes<HTMLButtonElement> {
	text: string
	className?: string
}

const ActionButton: FC<ActionButtonProps> = ({ text, className, ...rest }) => {
	return (
		<button className={cn(s.btn, className)} {...rest}>
			{text}
		</button>
	)
}
export default ActionButton

