import { adminAxios, defaultAxios } from '../api'
import { getCertificatesUrl } from '../config/api'
import { ICertificate, IEditCertificate } from '../shared/models/certificate.interface'

export const certificateService = {
	async getAll() {
		return await defaultAxios.get<ICertificate[]>(getCertificatesUrl(''))
	},

	// Admin
	async getById(_id: string) {
		return await adminAxios.get<IEditCertificate>(
			getCertificatesUrl(`/${_id}`)
		)
	},

	async create() {
		await adminAxios.post(getCertificatesUrl('/create'))
	},

	async update(_id: string, dto: IEditCertificate) {
		await adminAxios.put(getCertificatesUrl(`/${_id}`), dto)
	},

	async delete(_id: string) {
		await adminAxios.delete(getCertificatesUrl(`/${_id}`))
	},
}
