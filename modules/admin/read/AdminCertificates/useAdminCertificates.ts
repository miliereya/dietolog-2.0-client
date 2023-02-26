import { certificateService } from '@/services/certificate.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useAdminCertificates = () => {
	const {
		isLoading,
		data: certificates,
		refetch,
	} = useQuery(
		'not applied certificates',
		() => certificateService.getAll(),
		{
			select: ({ data }) =>
				data.map((c) => ({
					_id: c._id,
					title: c.title.ru,
					deleteHandler: () => deleteCertificate(c._id),
				})),
		}
	)

	const { mutate: createCertificate } = useMutation(
		'not applied certificates',
		() => certificateService.create(),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {
				alert('Пустой сертификат уже существует')
			},
		}
	)

	const { mutate: deleteCertificate } = useMutation(
		'delete certificate',
		(_id: string) => certificateService.delete(_id),
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
			certificates: certificates || [],
			createCertificate,
		}),
		[isLoading, certificates, createCertificate]
	)
}
