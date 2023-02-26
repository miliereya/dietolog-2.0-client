import {
	IConsultation,
	IEditConsultation,
} from '@/shared/models/consultation.interface'
import { adminAxios, defaultAxios } from '../api'
import { getCertificatesUrl, getConsultationsUrl } from '../config/api'

export const consultationService = {
	async getAll() {
		return await defaultAxios.get<IConsultation[]>(getConsultationsUrl(''))
	},

	// Admin
	async getById(_id: string) {
		return await adminAxios.get<IEditConsultation>(
			getConsultationsUrl(`/${_id}`)
		)
	},

	async create() {
		await adminAxios.post(getConsultationsUrl('/create'))
	},

	async update(_id: string, dto: IEditConsultation) {
		await adminAxios.put(getConsultationsUrl(`/${_id}`), dto)
	},

	async delete(_id: string) {
		await adminAxios.delete(getConsultationsUrl(`/${_id}`))
	},
}
