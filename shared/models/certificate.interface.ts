import { ILanguagedString } from '../../languages/template'

export interface ICertificate {
	_id: string
	title: ILanguagedString
	link: string
	preview: string
}

export interface IEditCertificate extends Omit<ICertificate, '_id'> {}
