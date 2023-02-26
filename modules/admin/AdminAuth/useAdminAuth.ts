import { AdminService } from '@/services/admin.service'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useAdminAuth = () => {
	const [isAdmin, setIsAdmin] = useState(false)

	const { isLoading } = useQuery('admin auth check', () => AdminService.check(), {
		onSuccess: () => {
			setIsAdmin(true)
		},
	})

	return { isLoading, isAdmin }
}
