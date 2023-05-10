import { MONTHS } from '$lib/config'

export const getMonthPath = (date: Date): string => {
	return `/${date.getFullYear()}/${MONTHS[date.getMonth()]}`
}
