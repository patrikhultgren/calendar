export function load({ url }: any) {
	const year = url.searchParams.get('year') || ''
	const month = url.searchParams.get('month') || ''
	return {
		props: {
			year,
			month
		}
	}
}
