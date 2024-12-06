import { type FC } from 'react'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { RemoveFileSvg } from 'src/UI/icons/removeFileSVG'

export const DocsSection: FC = () => {
	return (
		<AdminSection
			titleText='Документы события'
			sectionName='docsSection'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='isShowDocsSection'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ReactDropzone
				previewVariant='list'
				removeIcon={<RemoveFileSvg />}
				name='docs'
				accept={{
					'application/pdf': ['.pdf'],
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
				}}
				maxFiles={7}
				multiple
				customUploadBtn={<AddButton>Добавить документ</AddButton>}
			/>
		</AdminSection>
	)
}
