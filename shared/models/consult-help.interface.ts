export interface IConsultHelp {
	_id: string
	name: string
	phone: string
	email: string
	description: string
	isConfirmed: boolean
	createdAt: Date
}

export interface IConsultHelpCreate {
	name: string
	phone: string
	email: string
	description: string
	isConfirmed: boolean
}