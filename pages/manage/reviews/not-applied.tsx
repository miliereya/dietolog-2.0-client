import { useAdminCheck } from '@/hooks/useAdminCheck'
import NotAppliedReviews from '@/modules/admin/read/NotAppliedReviews/NotAppliedReviews'
import { NextPage } from 'next'

const NotAppliedReviewsPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className='admin-container'>
			<NotAppliedReviews />
		</div>
	)
}

export default NotAppliedReviewsPage
