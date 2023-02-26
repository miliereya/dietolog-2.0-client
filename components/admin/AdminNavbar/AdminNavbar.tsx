import { FC } from 'react'
import { adminNavbarData } from './admin-navbar.data'

import s from './AdminNavbar.module.scss'
import AdminNavbarItem from './AdminNavbarItem'

const AdminNavbar: FC = () => {
	return (
		<div className={s.navbar}>
			{adminNavbarData.map((i) => (
				<AdminNavbarItem key={i.url} item={i} />
			))}
		</div>
	)
}

export default AdminNavbar
