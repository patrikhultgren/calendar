import { format as dateFnsFormat } from 'date-fns'
import sv from 'date-fns/locale/sv/index.js'
import { months } from '$lib/config'
import { padValue } from '$lib/utils/number'

export const format = (value: string | Date, dateFormat: string) => {
	let date = value

	if (typeof value === 'string') {
		date = new Date(value)
	}

	if (date instanceof Date && !isNaN(date as any)) {
		return dateFnsFormat(date, dateFormat, { locale: sv })
	}

	return ''
}

export const getCurrentMonth = (searchParams: URLSearchParams | false, now: Date) =>
	new Date(
		searchParams && searchParams.get('year') && searchParams.get('month')
			? `${searchParams.get('year')}-${padValue(
					months.indexOf(searchParams.get('month') || '') + 1
			  )}-01`
			: now.getTime()
	)

export const getPreviousMonth = (currentMonth: Date) => {
	const date = new Date(currentMonth.getTime())
	date.setMonth(date.getMonth() - 1)
	return date
}

export const getNextMonth = (currentMonth: Date) => {
	const date = new Date(currentMonth.getTime())
	date.setMonth(date.getMonth() + 1)
	return date
}
