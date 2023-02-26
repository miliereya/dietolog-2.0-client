import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminOrderItem from '@/components/admin/AdminOrderItem/AdminOrderItem'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useNotAppliedOrders } from './useNotAppliedOrders'

const NotAppliedOrders: FC = () => {
	const { isLoading, orders, toggleOrder, deleteOrder } =
		useNotAppliedOrders()

	return isLoading ? null : (
		<Meta title="Not applied orders">
			<AdminNavbar />
			<AdminHeading text="Не подтвержденные заказы" />
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

export default NotAppliedOrders
