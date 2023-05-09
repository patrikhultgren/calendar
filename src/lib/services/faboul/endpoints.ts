import { PUBLIC_FABOUL_API_URL } from '$env/static/public'

const endpoints = {
	getMonthUrl: (year: number, month: number): string =>
		`${PUBLIC_FABOUL_API_URL}/${year}/${month.toString().padStart(2, '0')}`
}

export default endpoints
