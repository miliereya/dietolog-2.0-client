import { FC } from 'react'
import s from './AdminHeading.module.scss'

interface AdminHeadingProps {
	text: string
}

const AdminHeading: FC<AdminHeadingProps> = ({ text }) => {
	return <div className={s.heading}>{text}</div>
}

export default AdminHeading
