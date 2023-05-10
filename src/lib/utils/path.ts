import { months } from '$lib/config'
import { format } from '$lib/utils/date'
import { base } from '$app/paths'

export const getMonthPath = (date: Date, now: Date): string =>
	format(date, 'yyyy-MM') === format(now, 'yyyy-MM')
		? `${base}/`
		: `${base}/?year=${date.getFullYear()}&month=${months[date.getMonth()]}`
