import { adminAxios, defaultAxios } from '../api'
import { getReviewsUrl } from '../config/api'
import { IReview, IReviewCreate } from '../shared/models/review.interface'

export const ReviewService = {
	async getAllApplied() {
		return await defaultAxios.get<IReview[]>(getReviewsUrl(''))
	},

	async create(dto: IReviewCreate) {
		await defaultAxios.post(getReviewsUrl('/create'), dto)
	},

	// Admin
	async getNotApplied() {
		return await adminAxios.get<IReview[]>(getReviewsUrl('/not-applied'))
	},

	async apply(_id: string) {
		await adminAxios.put(getReviewsUrl('/apply/' + _id))
	},

	async delete(_id: string) {
		await adminAxios.delete(getReviewsUrl('/' + _id))
	},
}
