import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminReviewItem from '@/components/admin/AdminReviewItem/AdminReviewItem'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useNotAppliedReviews } from './useNotAppliedReviews'

const NotAppliedReviews: FC = () => {
	const { isLoading, reviews, applyReview, deleteReview } =
		useNotAppliedReviews()

	return isLoading ? null : (
		<Meta title="Not applied reviews">
			<AdminNavbar />
			<AdminHeading text="Не подтвержденные отзывы" />
			{reviews.map((r) => (
				<AdminReviewItem
					deleteReview={deleteReview}
					review={r}
					key={r._id}
					apply={applyReview}
				/>
			))}
		</Meta>
	)
}

export default NotAppliedReviews
