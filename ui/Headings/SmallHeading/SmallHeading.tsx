import { CSSProperties, FC } from 'react'
import s from './SmallHeading.module.scss'
import cn from 'classnames'

interface SmallHeadingProps {
	text: string
	className?: string
	style?: CSSProperties
}

const SmallHeading: FC<SmallHeadingProps> = ({ text, className, style }) => {
	return <h4 className={cn(s.heading, className)} style={style}>{text}</h4>
}

export default SmallHeading
