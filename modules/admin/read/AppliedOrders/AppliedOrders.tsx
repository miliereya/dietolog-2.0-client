import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminOrderItem from '@/components/admin/AdminOrderItem/AdminOrderItem'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAppliedOrders } from './useAppliedOrders'

const AppliedOrders: FC = () => {
	const { isLoading, orders, toggleOrder, deleteOrder } =
		useAppliedOrders()

	return isLoading ? null : (
		<Meta title="applied orders">
			<AdminNavbar />
			<AdminHeading text="Подтвержденные заказы" />
			{orders.map((r) => (
				<AdminOrderItem
					deleteOrder={deleteOrder}
					order={r}
					key={r._id}
					apply={toggleOrder}
				/>
			))}
		</Meta>
	)
}

export default AppliedOrders
