import { IRecord } from '@/shared/models/record.interface'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { formatDate } from '@/utils/date'
import { FC } from 'react'

import s from './AdminRecordItem.module.scss'

interface AdminRecordItemProps {
	record: IRecord
	apply: (_id: string) => void
	deleteRecord: (_id: string) => void
}

const AdminRecordItem: FC<AdminRecordItemProps> = ({
	record,
	apply,
	deleteRecord,
}) => {
	const { _id, name, email, createdAt, phone, isConfirmed } = record

	return (
		<div className={s.record}>
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
			<div className={s.btn_wrapper}>
				<AdminButton
					text={isConfirmed ? 'Убрать подтверждение' : 'Подтвердить'}
					onClick={() => apply(_id)}
				/>
				<AdminButton text="Удалить" onClick={() => deleteRecord(_id)} />
			</div>
		</div>
	)
}

export default AdminRecordItem
