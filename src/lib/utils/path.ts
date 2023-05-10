import { MONTHS } from '$lib/config'
import { format } from '$lib/utils/date'

export const getMonthPath = (date: Date, now: Date): string =>
	format(date, 'yyyy-MM') === format(now, 'yyyy-MM')
		? '/'
		: `/${date.getFullYear()}/${MONTHS[date.getMonth()]}`
