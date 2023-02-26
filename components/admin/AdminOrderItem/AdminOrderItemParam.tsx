import { IOrderParam } from '@/shared/models/order.interface'
import { FC } from 'react'

import s from './AdminOrderItem.module.scss'

interface AdminOrderItemParamProps {
	param: IOrderParam
}

const AdminOrderItemParam: FC<AdminOrderItemParamProps> = ({ param }) => {
	return (
		<div className={s.param}>
			<span>{param.title}: </span>
			{param.value}
		</div>
	)
}
export default AdminOrderItemParam
