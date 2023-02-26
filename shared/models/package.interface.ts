import { ILanguagedString } from '../../languages/template'

interface IPackageService {
	title: ILanguagedString
	price_1: number
	price_2: number
}

export interface IPackage {
	_id: string
	title: ILanguagedString
	description: ILanguagedString
	heading_1: ILanguagedString
	heading_2: ILanguagedString
	services: IPackageService[]
	sub_heading_1: ILanguagedString
	sub_heading_2: ILanguagedString
}

export interface IEditPackage extends Omit<IPackage, '_id'> {}
