import { type FC } from 'react'
import { type CommunityDocumentsInputs } from 'src/pages/community-layout/pages/admin-community-documents/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import communityDocStyles from '../../index.module.scss'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
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
		<AdminSection
			titleText='Регламенты и правила'
			sectionName='rulesSection'
			switcherText='Включить блок регламентов и правил'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ul>
				{fields?.map((field, idx) => (
					<li className={communityDocStyles.docsBlockItem} key={field.id}>
						{idx !== 0 && (
							<button
								className={communityDocStyles.docRemoveBtn}
								type='button'
								onClick={() => remove(idx)}
							>
								<RemoveBlockSvg />
							</button>
						)}

						<h4>Документ {idx + 1}</h4>

						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`rulesDocs.${idx}.ruleTitle`}
							dynamicError={errors.rulesDocs?.[idx]?.ruleTitle}
							label='Название документа'
							placeholder='Название'
							margin='0 0 20px 0'
						/>
						<ControlledMaskedInput
							name={`rulesDocs.${idx}.ruleVersion`}
							dynamicError={errors.rulesDocs?.[idx]?.ruleVersion}
							label='Номер версии'
							mask={Number}
							placeholder='Номер версии'
						/>
						<ReactDropzone
							name={`rulesDocs.${idx}.rulePdf`}
							variant='text'
							label='Загрузить PDF'
							uploadBtnText='Загрузить документ в формате PDF'
							margin='0 0 20px 0'
							accept={{
								'application/pdf': ['.pdf'],
							}}
						/>
						<ReactDropzone
							name={`rulesDocs.${idx}.ruleDocx`}
							variant='text'
							label='Загрузить DOCX'
							uploadBtnText='Загрузить документ в формате DOCX'
							accept={{
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
									'.docx',
								],
							}}
						/>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
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
			</AdminButton>
		</AdminSection>
	)
}
