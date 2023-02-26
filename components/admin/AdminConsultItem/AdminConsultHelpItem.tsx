import { IConsultHelp } from '@/shared/models/consult-help.interface'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { formatDate } from '@/utils/date'
import { FC } from 'react'

import s from './AdminConsultHelpItem.module.scss'

interface AdminConsultHelpItemProps {
	consultHelp: IConsultHelp
	apply: (_id: string) => void
	deleteConsultHelp: (_id: string) => void
}

const AdminConsultHelpItem: FC<AdminConsultHelpItemProps> = ({
	consultHelp,
	apply,
	deleteConsultHelp,
}) => {
	const { _id, name, email, createdAt, phone, isConfirmed, description } = consultHelp

	return (
		<div className={s.consultHelp}>
			<div className={s.date}>{formatDate(createdAt)}</div>
			<div className={s.name}>Имя: {name}</div>
			<div className={s.phone}>
				<span>Телефон: </span>
				{phone}
			</div>
			<div className={s.email}>
				<span>Email: </span>
				{email}
			</div>
			<div className={s.message}>
				<span>Сообщение: </span>
				{description}
			</div>
			<div className={s.btn_wrapper}>
				<AdminButton
					text={isConfirmed ? 'Убрать подтверждение' : 'Подтвердить'}
					onClick={() => apply(_id)}
				/>
				<AdminButton
					text="Удалить"
					onClick={() => deleteConsultHelp(_id)}
				/>
			</div>
		</div>
	)
}

export default AdminConsultHelpItem
