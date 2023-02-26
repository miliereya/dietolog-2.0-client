import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminRecordItem from '@/components/admin/AdminRecordItem/AdminRecordItem'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAppliedRecords } from './useAppliedRecords'

const AppliedRecords: FC = () => {
	const { isLoading, records, toggleRecord, deleteRecord } =
		useAppliedRecords()

	return isLoading ? null : (
		<Meta title="applied records">
			<AdminNavbar />
			<AdminHeading text="Подтвержденные записи" />
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

export default AppliedRecords
