import { ILanguagedString } from '../../languages/template'

export interface IConsultation {
    _id: string
	title: ILanguagedString
	type: ILanguagedString
	options: ILanguagedString[]
	price: string
}

export interface IEditConsultation extends Omit<IConsultation, '_id'> {}
