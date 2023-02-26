import { FC } from 'react'
import s from './Heading.module.scss'
import cn from 'classnames'

interface HeadingProps {
	text: string
	className?: string
}

const Heading: FC<HeadingProps> = ({ text, className }) => {
	return <h3 className={cn(s.heading, className)}>{text}</h3>
}

export default Heading
