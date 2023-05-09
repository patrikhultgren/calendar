import endpoints from '$lib/services/faboul/endpoints'
import request from '$lib/utils/request'

export type IDay = {
	datum: string
	veckodag: string
	'arbetsfri dag': 'Ja' | 'Nej'
	'röd dag': 'Ja' | 'Nej'
	vecka: string
	'dag i vecka': string
	namnsdag: Array<string>
	flaggdag: string
}

export interface IMonth {
	date: Date | null
	weeks: Array<Array<IDay>> | null
	days: Array<IDay> | null
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

const fetchMonth = async (currentMonth: Date): Promise<IMonth> => {
	let monthAndNearbyDays: Array<any> = []

	let previousMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth() - 1,
		currentMonth.getDate()
	)

	let nextMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth() + 1,
		currentMonth.getDate()
	)

	const monthDates = [previousMonth, currentMonth, nextMonth]

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

		const currentDays = results[1].value.dagar

		const firstWeek = currentDays[0].vecka
		const lastWeek = currentDays[currentDays.length - 1].vecka

		monthAndNearbyDays = [
			...results[0].value.dagar.filter((day: IDay) => day.vecka === firstWeek),
			...currentDays,
			...results[2].value.dagar.filter((day: IDay) => day.vecka === lastWeek)
		]

		return {
			...initialState,
			weeks: transformIntoWeeks(monthAndNearbyDays),
			days: currentDays
		}
	} catch (error) {
		return {
			...initialState,
			error
		}
	}
}

const transformIntoWeeks = (monthAndNearbyDays: Array<IDay>): Array<Array<IDay>> => {
	let weeks: Array<Array<IDay>> = []
	let weekIndex = 0

	for (let i = 0; i < monthAndNearbyDays.length; i++) {
		const day = monthAndNearbyDays[i]

		if (!weeks[weekIndex]) {
			weeks[weekIndex] = []
		}

		weeks[weekIndex].push(day)

		if (day.veckodag === 'Söndag') {
			weekIndex++
		}
	}

	return weeks
}

export default fetchMonth
