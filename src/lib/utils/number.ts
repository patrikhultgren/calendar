export function padValue(value: number) {
	return value < 10 ? `0${value}` : value
}
