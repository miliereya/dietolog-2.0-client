import { consultationService } from '@/services/consultation.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useAdminConsultations = () => {
	const {
		isLoading,
		data: consultations,
		refetch,
	} = useQuery(
		'not applied consultations',
		() => consultationService.getAll(),
		{
			select: ({ data }) =>
				data.map((c) => ({
					_id: c._id,
					title: c.title.ru,
					deleteHandler: () => deleteConsultation(c._id),
				})),
		}
	)

	const { mutate: createCertificate } = useMutation(
		'not applied consultations',
		() => consultationService.create(),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {
				alert('Пустая консультация уже существует')
			},
		}
	)

	const { mutate: deleteConsultation } = useMutation(
		'delete consultation',
		(_id: string) => consultationService.delete(_id),
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
			consultations: consultations || [],
			createCertificate,
		}),
		[isLoading, consultations, createCertificate]
	)
}
