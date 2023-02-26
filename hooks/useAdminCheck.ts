import { AdminService } from '@/services/admin.service'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useAdminCheck = () => {
	const [isLoading, setIsLoading] = useState(true)
	const { push } = useRouter()

	useQuery('admin check', () => AdminService.check(), {
		onSuccess: () => {
			setIsLoading(false)
		},
		onError: () => {
			push('/404')
		},
	})

	return { isLoading }
}
