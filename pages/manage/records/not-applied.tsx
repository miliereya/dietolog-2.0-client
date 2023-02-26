import { useAdminCheck } from '@/hooks/useAdminCheck'
import NotAppliedRecords from '@/modules/admin/read/NotAppliedRecords/NotAppliedRecords'
import { NextPage } from 'next'

const NotAppliedRecordsPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<NotAppliedRecords />
		</div>
	)
}

export default NotAppliedRecordsPage
