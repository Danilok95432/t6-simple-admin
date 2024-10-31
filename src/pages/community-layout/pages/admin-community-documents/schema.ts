import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type RulesDoc = {
	ruleTitle: string
	ruleVersion: string
	rulePdf?: FileWithPreview[]
	ruleDocx?: FileWithPreview[]
}
type LawsDoc = {
	lawTitle: string
	lawVersion: string
	lawDocLink: string
	lawDocSource: string
	lawDocFile?: FileWithPreview[]
}

export type CommunityDocumentsInputs = {
	titleText: string
	charterName: string
	charterDescription: string
	charterVersion: string
	charterPdf?: FileWithPreview[]
	charterDocx?: FileWithPreview[]
	rulesSection?: boolean
	rulesDocs?: RulesDoc[]
	lawsSection?: boolean
	lawsDocs?: LawsDoc[]
}

export const communityDocumentsSchema = yup.object().shape({
	titleText: yup.string().required('Введите заглавный текст'),
	charterName: yup.string().required('Введите название устава'),
	charterDescription: yup.string().required('Введите короткое описание устава'),
	charterVersion: yup.string().required('Введите номер версии'),
	rulesSection: yup.boolean(),
	rulesDocs: yup.array().when('rulesSection', ([rulesSection]) => {
		return rulesSection
			? yup.array().of(
					yup.object().shape({
						ruleTitle: yup.string().required('Введите название документа'),
						ruleVersion: yup.string().required('Введите номер версии'),
					}),
				)
			: yup.array().notRequired()
	}),
	lawsSection: yup.boolean(),
	lawsDocs: yup.array().when('lawsSection', ([lawsSection]) => {
		return lawsSection
			? yup.array().of(
					yup.object().shape({
						lawTitle: yup.string().required('Введите название документа'),
						lawVersion: yup.string().required('Введите номер версии'),
						lawDocLink: yup
							.string()
							.url('Неверный формат ссылки')
							.required('Укажите ссылку на документ'),
						lawDocSource: yup.string().required('Укажите источник'),
					}),
				)
			: yup.array().notRequired()
	}),
})
