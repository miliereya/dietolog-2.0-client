import { adminAxios, defaultAxios } from '../api'
import { AdminCredentials } from '../shared/models/admin.interface'

export const AdminService = {
	async login(dto: AdminCredentials) {
		try {
			let response = await defaultAxios.post('/admin-auth', dto)
			localStorage.setItem('hash', response.data)
		} catch (error) {
			alert('Неверные данные')
		}
	},

	async check() {
		await adminAxios.get('/admin-auth/check')
	},
}
