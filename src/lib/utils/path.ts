import { format } from '$lib/utils/date'

export const getMonthPath = (date: Date): string => {
	return `/${date.getFullYear()}/${format(date, 'MMMM')}`
}
