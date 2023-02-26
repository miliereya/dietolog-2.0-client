import { useAdminCheck } from '@/hooks/useAdminCheck'
import AppliedOrders from '@/modules/admin/read/AppliedOrders/AppliedOrders'
import { NextPage } from 'next'

const NotAppliedOrderPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AppliedOrders />
		</div>
	)
}

export default NotAppliedOrderPage
