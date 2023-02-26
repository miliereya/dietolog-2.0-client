import { getAdminUrl } from '@/config/api'
import Link from 'next/link'
import { FC } from 'react'
import { IAdminNavbarItem } from './admin-navbar.interface'

const AdminNavbarItem: FC<{ item: IAdminNavbarItem }> = ({ item }) => {
	return <Link href={getAdminUrl(item.url)}>{item.title}</Link>
}

export default AdminNavbarItem
