import { getAdminUrl } from '@/config/api'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import Link from 'next/link'
import { FC } from 'react'
import { IAdminTableItem } from './admin-table.interface'

import s from './AdminTable.module.scss'

interface IAdminTableItemProps {
	item: IAdminTableItem
	path: string
}

const AdminTableItem: FC<IAdminTableItemProps> = ({ item, path }) => {
	const { _id, deleteHandler, title } = item

	return (
		<div className={s.item}>
			<div className={s.title}>{title}</div>
			<div className={s.btn_wrapper}>
				<Link href={getAdminUrl(`/${path}/${_id}`)}>
					<AdminButton text="Редактировать" />
				</Link>
				<AdminButton
					text="Удалить"
					onClick={() => deleteHandler(_id)}
				/>
			</div>
		</div>
	)
}

export default AdminTableItem
