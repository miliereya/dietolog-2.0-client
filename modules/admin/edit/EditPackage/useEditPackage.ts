import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { getKeys } from '@/utils/object'
import { getAdminUrl } from '@/config/api'
import { IEditPackage } from '@/shared/models/package.interface'
import { packageService } from '@/services/packages.service'

export const useEditPackage = (setValue: UseFormSetValue<IEditPackage>) => {
	const { push, query } = useRouter()

	const packageId = String(query._id)

	const { isLoading } = useQuery(
		['package', packageId],
		() => packageService.getById(packageId),
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
		'update package',
		(data: IEditPackage) => packageService.update(packageId, data),
		{
			onError(err) {
				alert('Ошибка')
			},
			onSuccess: () => {
				alert('Обновлено успешно')
				push(getAdminUrl('/packages'))
			},
		}
	)

	const onSubmit: SubmitHandler<IEditPackage> = async (
		data: IEditPackage
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
