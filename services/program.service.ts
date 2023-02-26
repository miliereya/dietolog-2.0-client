import { adminAxios, defaultAxios } from '../api'
import { getProgramsUrl } from '../config/api'
import { IProgram, IEditProgram } from '../shared/models/program.interface'

export const programService = {
	async getAll() {
		return await defaultAxios.get<IProgram[]>(getProgramsUrl(''))
	},

	// Admin
	async getById(_id: string) {
		return await adminAxios.get<IEditProgram>(
			getProgramsUrl(`/${_id}`)
		)
	},

	async create() {
		await adminAxios.post(getProgramsUrl('/create'))
	},

	async update(_id: string, dto: IEditProgram) {
		await adminAxios.put(getProgramsUrl(`/${_id}`), dto)
	},

	async delete(_id: string) {
		await adminAxios.delete(getProgramsUrl(`/${_id}`))
	},
}
