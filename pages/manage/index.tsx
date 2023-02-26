import AdminAuth from '@/modules/admin/AdminAuth/AdminAuth'
import { NextPage } from 'next'

const AdminPage: NextPage = () => {
	return (
		<div className='admin-container'>
			<AdminAuth />
		</div>
	)
}

export default AdminPage
