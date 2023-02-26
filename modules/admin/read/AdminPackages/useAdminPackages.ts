import { packageService } from '@/services/packages.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useAdminPackages = () => {
	const {
		isLoading,
		data: packages,
		refetch,
	} = useQuery('not applied packages', () => packageService.getAll(), {
		select: ({ data }) =>
			data.map((c) => ({
				_id: c._id,
				title: c.title.ru,
				deleteHandler: () => deleteConsultation(c._id),
			})),
	})

	const { mutate: createPackage } = useMutation(
		'not applied packages',
		() => packageService.create(),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {
				alert('Пустой пакет уже существует')
			},
		}
	)

	const { mutate: deleteConsultation } = useMutation(
		'delete Package',
		(_id: string) => packageService.delete(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	return useMemo(
		() => ({
			isLoading,
			packages: packages || [],
			createPackage,
		}),
		[isLoading, packages, createPackage]
	)
}
