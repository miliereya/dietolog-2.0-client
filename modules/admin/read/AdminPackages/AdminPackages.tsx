import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import AdminTable from '@/ui/Tables/AdminTable/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAdminPackages } from './useAdminPackages'

const AdminPackages: FC = () => {
	const { isLoading, packages, createPackage } = useAdminPackages()

	return isLoading ? null : (
		<Meta title="Admin packages">
			<div>
				<AdminNavbar />
				<AdminHeading text="Пакеты" />
				<AdminTable
					path="packages"
					addNewHandler={createPackage}
					items={packages}
				/>
			</div>
		</Meta>
	)
}

export default AdminPackages
