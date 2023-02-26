import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import AdminTable from '@/ui/Tables/AdminTable/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAdminCertificates } from './useAdminCertificates'

const AdminCertificates: FC = () => {
	const { isLoading, certificates, createCertificate } =
		useAdminCertificates()

	return isLoading ? null : (
		<Meta title="Admin certificates">
			<div>
				<AdminNavbar />
				<AdminHeading text="Сертификаты" />
				<AdminTable
					path="certificates"
					addNewHandler={createCertificate}
					items={certificates}
				/>
			</div>
		</Meta>
	)
}

export default AdminCertificates
