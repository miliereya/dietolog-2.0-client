import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { consultationService } from '@/services/consultation.service'
import { getKeys } from '@/utils/object'
import { getAdminUrl } from '@/config/api'
import { IEditConsultation } from '@/shared/models/consultation.interface'

export const useEditConsultation = (setValue: UseFormSetValue<IEditConsultation>) => {
	const { push, query } = useRouter()

	const consultationId = String(query._id)

	const { isLoading } = useQuery(
		['consultation', consultationId],
		() => consultationService.getById(consultationId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(err) {
				alert('Ошибка')
			},
			enabled: !!query._id,
		}
	)

	const { mutateAsync } = useMutation(
		'update consultation',
		(data: IEditConsultation) => 
			consultationService.update(consultationId, data),
		{
			onError(err) {
				alert('Ошибка')
			},
			onSuccess: () => {
				alert('Обновлено успешно')
				push(getAdminUrl('/consultations'))
			},
		}
	)

	const onSubmit: SubmitHandler<IEditConsultation> = async (
		data: IEditConsultation
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
