import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import AdminTable from '@/ui/Tables/AdminTable/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAdminConsultations } from './useAdminConsultations'

const AdminConsultations: FC = () => {
	const { isLoading, consultations, createCertificate } =
		useAdminConsultations()

	return isLoading ? null : (
		<Meta title="Admin consultations">
			<div>
				<AdminNavbar />
				<AdminHeading text="Консультации" />
				<AdminTable
					path='consultations'
					addNewHandler={createCertificate}
					items={consultations}
				/>
			</div>
		</Meta>
	)
}

export default AdminConsultations
