import { IFile } from '@/shared/models/file.interface'
import { adminAxios } from 'api'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return adminAxios.post<IFile>('/files/upload', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},

	async delete(path: string) {
		adminAxios.delete(`/files/delete?path=${path}`)
	},
}
