import { useAdminCheck } from '@/hooks/useAdminCheck'
import NotAppliedOrders from '@/modules/admin/read/NotAppliedOrders/NotAppliedOrders'
import { NextPage } from 'next'

const NotAppliedOrdersPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<NotAppliedOrders />
		</div>
	)
}

export default NotAppliedOrdersPage
