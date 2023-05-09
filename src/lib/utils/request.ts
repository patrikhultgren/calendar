export class StatusError extends Error {
	status: number

	constructor(message: string, status: number) {
		super(message)
		this.name = 'StatusError'
		this.status = status
	}
}

const checkStatus = (response: Response) => {
	if (response.ok) {
		return response
	}

	throw new StatusError(`Status error: ${response.status}`, response.status)
}

const parseJSON = (response: Response) => response.json()

interface IRequestParams {
	endpoint: string
	method?: string
	contentType?: string
	data?: any
	headers?: any
	credentials?: string
}

const request = async ({
	endpoint,
	method = 'GET',
	contentType = 'application/json',
	data = null,
	headers = {},
	credentials = 'same-origin'
}: IRequestParams): Promise<any> => {
	let options: any = {
		method,
		mode: 'cors',
		headers: {
			Accept: contentType,
			...headers
		},
		credentials
	}

	if (data) {
		options.body = JSON.stringify(data)
	}

	return fetch(endpoint, options).then(checkStatus).then(parseJSON)
}

export default request
