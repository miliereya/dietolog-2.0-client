export interface IReview {
    _id: string
    name: string
    text: string
    isApplied: boolean
    createdAt: Date
}

export interface IReviewCreate {
	name: string
	text: string
}