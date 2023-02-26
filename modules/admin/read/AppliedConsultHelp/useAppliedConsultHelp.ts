import { ConsultHelpService } from '@/services/consult-help.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useAppliedConsultHelp = () => {
	const {
		isLoading,
		data: consultHelps,
		refetch,
	} = useQuery(
		'applied consultHelps',
		() => ConsultHelpService.getAllApplied(),
		{
			select: ({ data }) => data,
		}
	)

	const { mutate: toggleConsultHelp } = useMutation(
		'toggle consultHelp',
		(_id: string) => ConsultHelpService.toggleConfirmation(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	const { mutate: deleteConsultHelp } = useMutation(
		'delete consultHelp',
		(_id: string) => ConsultHelpService.delete(_id),
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
			consultHelps: consultHelps || [],
			toggleConsultHelp,
			deleteConsultHelp,
		}),
		[isLoading, consultHelps, toggleConsultHelp, deleteConsultHelp]
	)
}
