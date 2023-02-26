import { useAdminCheck } from '@/hooks/useAdminCheck'
import AdminCertificates from '@/modules/admin/read/AdminCertificates/AdminCertificates'
import { NextPage } from 'next'

const AdminCertificatesPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AdminCertificates />
		</div>
	)
}

export default AdminCertificatesPage
