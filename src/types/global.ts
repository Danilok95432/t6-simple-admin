export type RelatedLink = {
	id: string
	title: string
}

export type RouteBlock = {
	routeTitle: string
	routeDesc: string
	routeScript: string
}

export type FilterTableInput = {
	name: string
	placeholder: string
	type: 'text' | 'date'
}

export type ResponseError = {
	status: number
	data: {
		status: string
		errortext: string
	}
}
