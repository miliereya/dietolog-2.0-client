import { AdminService } from '@/services/admin.service'
import { AdminCredentials } from '@/shared/models/admin.interface'
import { useMutation } from 'react-query'

export const useAdminForm = () => {
	const { mutateAsync: login } = useMutation(
		'admin form',
		(dto: AdminCredentials) => AdminService.login(dto),
		{
			onError: () => {
                console.log('e')
				alert('Wrong login or password')
			},
			onSuccess: () => {
				location.reload()
			},
		}
	)

	return { login }
}
