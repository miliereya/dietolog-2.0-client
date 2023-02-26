import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { FC } from 'react'
import { IAdminTableItem } from './admin-table.interface'

import s from './AdminTable.module.scss'
import AdminTableItem from './AdminTableItem'

interface AdminTableProps {
	items: IAdminTableItem[]
	path: string
	addNewHandler: () => void
}

const AdminTable: FC<AdminTableProps> = ({ items, addNewHandler, path }) => {
	return (
		<div className={s.wrapper}>
			<AdminButton
				text="Добавить новое"
				onClick={addNewHandler}
				style={{ margin: '20px 0' }}
			/>
			<div className={s.table}>
				<div className={s.heading}>
					<div>Название</div>
					<div>Управление</div>
				</div>
				{items.map((i) => (
					<AdminTableItem item={i} key={i._id} path={path} />
				))}
			</div>
		</div>
	)
}

export default AdminTable
