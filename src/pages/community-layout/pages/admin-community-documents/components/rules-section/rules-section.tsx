import { type FC } from 'react'
import { type CommunityDocumentsInputs } from 'src/pages/community-layout/pages/admin-community-documents/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { RemoveTextFileSvg } from 'src/UI/icons/removeTextFileSVG'
import { GridRow } from 'src/components/grid-row/grid-row'
import { FlexRow } from 'src/components/flex-row/flex-row'
export const RulesSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<CommunityDocumentsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'rulesDocs',
	})

	return (
		<AdminSection titleText='Регламенты и правила' sectionName='rulesSection'>
			<ul>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>Документ {idx + 1}</h4>
						<GridRow $alignItems='center'>
							<GridRow $template='auto / 1fr 200px'>
								<ControlledInput
									name={`rulesDocs.${idx}.ruleTitle`}
									dynamicError={errors.rulesDocs?.[idx]?.ruleTitle}
									placeholder='Название'
								/>
								<ControlledMaskedInput
									name={`rulesDocs.${idx}.ruleVersion`}
									dynamicError={errors.rulesDocs?.[idx]?.ruleVersion}
									mask={Number}
									placeholder='Номер версии'
								/>
							</GridRow>
							<FlexRow>
								<ReactDropzone
									name={`rulesDocs.${idx}.rulePdf`}
									variant='text'
									uploadBtnText='Загрузить PDF'
									accept={{
										'application/pdf': ['.pdf'],
									}}
								/>
								<ReactDropzone
									name={`rulesDocs.${idx}.ruleDocx`}
									variant='text'
									uploadBtnText='Загрузить DOCX'
									accept={{
										'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
											'.docx',
										],
									}}
								/>
								{idx !== 0 && (
									<button type='button' onClick={() => remove(idx)}>
										<RemoveTextFileSvg />
									</button>
								)}
							</FlexRow>
						</GridRow>
					</li>
				))}
			</ul>
			<AddButton
				type='button'
				onClick={() => {
					append(
						{
							ruleTitle: '',
							ruleVersion: '',
							rulePdf: [],
							ruleDocx: [],
						},
						{ shouldFocus: false },
					)
				}}
			>
				Добавить документ
			</AddButton>
		</AdminSection>
	)
}
