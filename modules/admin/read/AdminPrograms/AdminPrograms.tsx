import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import AdminTable from '@/ui/Tables/AdminTable/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAdminPrograms } from './useAdminPrograms'

const AdminPrograms: FC = () => {
	const { isLoading, programs, createProgram } = useAdminPrograms()

	return isLoading ? null : (
		<Meta title="Admin programs">
			<div>
				<AdminNavbar />
				<AdminHeading text="Программы" />
				<AdminTable
					path="programs"
					addNewHandler={createProgram}
					items={programs}
				/>
			</div>
		</Meta>
	)
}

export default AdminPrograms
