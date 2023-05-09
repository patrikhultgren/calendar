export const getMonthPath = (date: Date): string => {
	return `/${date.getFullYear()}/${date.getMonth() + 1}`
}
