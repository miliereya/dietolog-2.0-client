import { ConsultHelpService } from '@/services/consult-help.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useNotAppliedConsultHelp = () => {
	const {
		isLoading,
		data: ConsultHelps,
		refetch,
	} = useQuery(
		'not applied ConsultHelps',
		() => ConsultHelpService.getNotApplied(),
		{
			select: ({ data }) => data,
		}
	)

	const { mutate: toggleConsultHelp } = useMutation(
		'toggle ConsultHelp',
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
		'delete ConsultHelp',
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
			ConsultHelps: ConsultHelps || [],
			toggleConsultHelp,
			deleteConsultHelp,
		}),
		[isLoading, ConsultHelps, toggleConsultHelp, deleteConsultHelp]
	)
}
