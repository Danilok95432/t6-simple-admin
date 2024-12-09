type ProgramPoint = {
	pointTitle: string
	pointDate: Date | null
	pointTimeStart: Date | null
	pointTimeEnd: Date | null
	pointLocation: string
}

export type ProgramInputs = {
	isShowPointsSection?: boolean
	pointsSection?: boolean
	points?: ProgramPoint[]
}
