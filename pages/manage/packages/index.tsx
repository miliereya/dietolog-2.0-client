import { useAdminCheck } from '@/hooks/useAdminCheck'
import AdminPackages from '@/modules/admin/read/AdminPackages/AdminPackages'
import { NextPage } from 'next'

const AdminPackagesPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AdminPackages />
		</div>
	)
}

export default AdminPackagesPage
