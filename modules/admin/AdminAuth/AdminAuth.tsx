import AdminForm from '@/components/admin/AdminForm/AdminForm'
import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import { FC } from 'react'
import { useAdminAuth } from './useAdminAuth'

const AdminAuth: FC = () => {
	const { isLoading, isAdmin } = useAdminAuth()

	return isLoading ? null : isAdmin ? <AdminNavbar /> : <AdminForm />
}

export default AdminAuth
