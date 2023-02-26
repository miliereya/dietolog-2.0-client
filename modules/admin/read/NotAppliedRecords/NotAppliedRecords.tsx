import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminRecordItem from '@/components/admin/AdminRecordItem/AdminRecordItem'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useNotAppliedRecords } from './useNotAppliedRecords'

const NotAppliedRecords: FC = () => {
	const { isLoading, records, toggleRecord, deleteRecord } =
		useNotAppliedRecords()

	return isLoading ? null : (
		<Meta title="Not applied records">
			<AdminNavbar />
			<AdminHeading text="Не подтвержденные записи" />
			{records.map((r) => (
				<AdminRecordItem
					deleteRecord={deleteRecord}
					record={r}
					key={r._id}
					apply={toggleRecord}
				/>
			))}
		</Meta>
	)
}

export default NotAppliedRecords
