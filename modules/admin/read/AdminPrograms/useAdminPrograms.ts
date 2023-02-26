import { programService } from '@/services/program.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useAdminPrograms = () => {
	const {
		isLoading,
		data: programs,
		refetch,
	} = useQuery('not applied programs', () => programService.getAll(), {
		select: ({ data }) =>
			data.map((c) => ({
				_id: c._id,
				title: c.title.ru,
				deleteHandler: () => deleteProgram(c._id),
			})),
	})

	const { mutate: createProgram } = useMutation(
		'not applied programs',
		() => programService.create(),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {
				alert('Пустая программа уже существует')
			},
		}
	)

	const { mutate: deleteProgram } = useMutation(
		'delete program',
		(_id: string) => programService.delete(_id),
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
			programs: programs || [],
			createProgram,
		}),
		[isLoading, programs, createProgram]
	)
}
