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
	weeks: Array<Array<IDay>>
	days: Array<IDay>
}

// monthAndNearbyDays -> weeks
// currentMonthOnly -> days
const fetchMonth = async (year: number, month: number): Promise<IMonth | null> => {
	let monthAndNearbyDays: Array<any> = []

	const date = new Date(year, month)

	let previousMonth = new Date(date.getTime())
	previousMonth.setMonth(date.getMonth() - 1)

	let currentMonth = new Date(date.getTime())

	let nextMonth = new Date(date.getTime())
	nextMonth.setMonth(date.getMonth() + 1)

	const months = [previousMonth, currentMonth, nextMonth]

	try {
		const promises = []

		for (const month of months) {
			promises.push(
				request({
					endpoint: endpoints.getMonthUrl(month.getFullYear(), month.getMonth())
				})
			)
		}

		const results: any = await Promise.allSettled(promises)

		for (const result of results) {
			if (result.status === 'rejected') {
				return null
			}
		}

		const currentDays = results[1].value.dagar

		const firstWeek = currentDays[0].vecka
		const lastWeek = currentDays[currentDays.length - 1].vecka

		monthAndNearbyDays = [
			...results[0].value.dagar.filter((day: any) => day.vecka === firstWeek),
			...currentDays,
			...results[2].value.dagar.filter((day: any) => day.vecka === lastWeek)
		]

		return { weeks: transformMonthAndNearbyDaysIntoWeeks(monthAndNearbyDays), days: currentDays }

		// setResult({
		// 	response: transformResponse ? transformResponse(response) : response,
		// 	loading: false,
		// 	finished: true,
		// 	error: null
		// })
	} catch (error) {
		// setResult({
		// 	response: null,
		// 	loading: false,
		// 	finished: true,
		// 	error
		// })
	}

	return null
}

const transformMonthAndNearbyDaysIntoWeeks = (
	monthAndNearbyDays: Array<IDay>
): Array<Array<IDay>> => {
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
