import { type FC } from 'react'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { RemoveFileSvg } from 'src/UI/icons/removeFileSVG'
import { ReactDropzoneFiles } from 'src/components/react-dropzone-files/react-dropzone-files'

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
			<ReactDropzoneFiles
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
