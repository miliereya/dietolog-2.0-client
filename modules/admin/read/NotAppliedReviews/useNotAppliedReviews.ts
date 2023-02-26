import { ReviewService } from '@/services/review.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useNotAppliedReviews = () => {
	const {
		isLoading,
		data: reviews,
		refetch,
	} = useQuery('not applied reviews', () => ReviewService.getNotApplied(), {
		select: ({ data }) => data
	})

	const { mutate: applyReview } = useMutation(
		'apply review',
		(_id: string) => ReviewService.apply(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	const { mutate: deleteReview } = useMutation(
		'delete review',
		(_id: string) => ReviewService.delete(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	return useMemo(
		() => ({
			isLoading,
			reviews: reviews || [],
			applyReview,
			deleteReview,
		}),
		[isLoading, reviews, applyReview, deleteReview]
	)
}
