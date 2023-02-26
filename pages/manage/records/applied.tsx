import { useAdminCheck } from '@/hooks/useAdminCheck'
import AppliedRecords from '@/modules/admin/read/AppliedRecords/AppliedRecords'
import { NextPage } from 'next'

const NotAppliedRecordPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AppliedRecords />
		</div>
	)
}

export default NotAppliedRecordPage
