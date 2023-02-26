import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { programService } from '@/services/program.service'
import { getKeys } from '@/utils/object'
import { getAdminUrl } from '@/config/api'
import { IEditProgram } from '@/shared/models/program.interface'

export const useEditProgram = (setValue: UseFormSetValue<IEditProgram>) => {
	const { push, query } = useRouter()

	const programId = String(query._id)

	const { isLoading } = useQuery(
		['program', programId],
		() => programService.getById(programId),
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
		'update program',
		(data: IEditProgram) => 
			programService.update(programId, data),
		{
			onError(err) {
				alert('Ошибка')
			},
			onSuccess: () => {
				alert('Обновлено успешно')
				push(getAdminUrl('/programs'))
			},
		}
	)

	const onSubmit: SubmitHandler<IEditProgram> = async (
		data: IEditProgram
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
