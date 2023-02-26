import { useAdminCheck } from '@/hooks/useAdminCheck'
import AdminConsultations from '@/modules/admin/read/AdminConsultations/AdminConsultations'
import { NextPage } from 'next'

const AdminConsultationsPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AdminConsultations />
		</div>
	)
}

export default AdminConsultationsPage
