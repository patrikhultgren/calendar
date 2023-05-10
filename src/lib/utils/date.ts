import { format as dateFnsFormat } from 'date-fns'
import sv from 'date-fns/locale/sv'

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
