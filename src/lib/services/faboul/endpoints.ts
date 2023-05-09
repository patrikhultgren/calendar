// const FABOUL_API_URL = 'https://sholiday.faboul.se/dagar/v2.1'
const FABOUL_API_URL = '/api/days'

const endpoints = {
	getMonthUrl: (year: number, month: number): string =>
		`${FABOUL_API_URL}/${year}/${month.toString().padStart(2, '0')}`
}

export default endpoints
