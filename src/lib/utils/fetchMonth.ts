import endpoints from '$lib/services/faboul/endpoints'
import request from '$lib/utils/request'

type IFaboulDay = {
	datum: string
	veckodag: string
	'arbetsfri dag': 'Ja' | 'Nej'
	'röd dag': 'Ja' | 'Nej'
	vecka: string
	'dag i vecka': string
	namnsdag: Array<string>
	flaggdag: string
	helgdag?: string
	helgdagsafton?: string
}

export type ICalendarDay = {
	date: Date
	week: number
	weekday: number
	isNonWorkingDay: boolean
	isRedDay: boolean
	flagDay: string
	names: Array<string>
	holiday: string
	holidayEvening: string
}

export interface IMonth {
	date: Date | null
	weeks: Array<Array<ICalendarDay>> | null
	loading: boolean
	error: any
}

export const initialState = {
	date: null,
	weeks: null,
	days: null,
	loading: false,
	error: null
}

const fetchMonth = async (activeMonth: Date): Promise<IMonth> => {
	let monthAndNearbyDays: Array<any> = []

	let previousMonth = new Date(
		activeMonth.getFullYear(),
		activeMonth.getMonth() - 1,
		activeMonth.getDate()
	)

	let nextMonth = new Date(
		activeMonth.getFullYear(),
		activeMonth.getMonth() + 1,
		activeMonth.getDate()
	)

	const monthDates = [previousMonth, activeMonth, nextMonth]

	try {
		const promises = []

		for (const monthDate of monthDates) {
			promises.push(
				request({
					endpoint: endpoints.getMonthUrl(monthDate.getFullYear(), monthDate.getMonth() + 1)
				})
			)
		}

		const results: any = await Promise.allSettled(promises)

		for (const result of results) {
			if (result.status === 'rejected') {
				return {
					...initialState,
					error: new Error('Failed to fetch')
				}
			}
		}

		const previousDays = transformDays(results[0].value.dagar)
		const currentDays = transformDays(results[1].value.dagar)
		const nextDays = transformDays(results[2].value.dagar)

		const firstWeek = currentDays[0].week
		const lastWeek = currentDays[currentDays.length - 1].week

		monthAndNearbyDays = [
			...previousDays.filter((day) => day.week === firstWeek),
			...currentDays,
			...nextDays.filter((day) => day.week === lastWeek)
		]

		return {
			...initialState,
			weeks: transformIntoWeeks(monthAndNearbyDays)
		}
	} catch (error) {
		return {
			...initialState,
			error
		}
	}
}

const transformDays = (days: Array<IFaboulDay>): Array<ICalendarDay> =>
	days.map((day) => ({
		date: new Date(day.datum),
		week: parseInt(day.vecka),
		weekday: parseInt(day['dag i vecka']),
		isNonWorkingDay: day['arbetsfri dag'] === 'Ja',
		isRedDay: day['röd dag'] === 'Ja',
		flagDay: day.flaggdag,
		names: day.namnsdag,
		holiday: day.helgdag || '',
		holidayEvening: day.helgdagsafton || ''
	}))

const transformIntoWeeks = (
	monthAndNearbyDays: Array<ICalendarDay>
): Array<Array<ICalendarDay>> => {
	let weeks: Array<Array<ICalendarDay>> = []
	let weekIndex = 0

	for (let i = 0; i < monthAndNearbyDays.length; i++) {
		const day = monthAndNearbyDays[i]

		if (!weeks[weekIndex]) {
			weeks[weekIndex] = []
		}

		weeks[weekIndex].push(day)

		if (day.weekday === 7) {
			weekIndex++
		}
	}

	return weeks
}

export default fetchMonth
