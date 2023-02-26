import dayjs from 'dayjs'

export const formatDate = (date: Date, type: 's' | 'l' = 'l') => {
	return type === 's'
		? dayjs(date).format('D.M.YYYY')
		: dayjs(date).format('D/M/YYYY - h:mm A')
}
