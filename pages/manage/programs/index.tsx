import { useAdminCheck } from '@/hooks/useAdminCheck'
import AdminPrograms from '@/modules/admin/read/AdminPrograms/AdminPrograms'
import { NextPage } from 'next'

const AdminProgramsPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AdminPrograms />
		</div>
	)
}

export default AdminProgramsPage
