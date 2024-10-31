import { type FC } from 'react'

import cn from 'classnames'
import { type CommunityDocumentsInputs } from 'src/pages/community-layout/pages/admin-community-documents/schema'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import communityDocStyles from '../../index.module.scss'

import styles from './index.module.scss'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
export const LawsSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<CommunityDocumentsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'lawsDocs',
	})

	return (
		<AdminSection
			titleText='Законы и нормы'
			sectionName='lawsSection'
			switcherText='Включить блок законов и норм'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ul className={styles.lowsList}>
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
							name={`lawsDocs.${idx}.lawTitle`}
							dynamicError={errors.lawsDocs?.[idx]?.lawTitle}
							label='Название документа'
							placeholder='Название'
							margin='0 0 20px 0'
						/>
						<ControlledMaskedInput
							name={`lawsDocs.${idx}.lawVersion`}
							dynamicError={errors.lawsDocs?.[idx]?.lawVersion}
							label='Номер версии'
							mask={Number}
							placeholder='Номер версии'
						/>

						<h5>Загрузить документ</h5>
						<div className={styles.lowLinks}>
							<ControlledInput
								className={cn(adminStyles.adminMainInput, styles.lowLinksInput)}
								name={`lawsDocs.${idx}.lawDocLink`}
								dynamicError={errors.lawsDocs?.[idx]?.lawDocLink}
								label='Ссылка на документ'
								placeholder='https://'
								margin='0'
							/>
							<ControlledInput
								className={cn(adminStyles.adminMainInput, styles.lowLinksInput)}
								name={`lawsDocs.${idx}.lawDocSource`}
								dynamicError={errors.lawsDocs?.[idx]?.lawDocSource}
								label='Источник'
								placeholder='Источник'
								margin='0'
							/>
						</div>
						<p className={styles.lowLinksOr}>или</p>
						<ReactDropzone
							name={`lawsDocs.${idx}.lawDocFile`}
							variant='text'
							uploadBtnText='Загрузить документ в PDF или DOCX'
							margin='0'
							accept={{
								'application/pdf': ['.pdf'],
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
							lawTitle: '',
							lawVersion: '',
							lawDocLink: '',
							lawDocSource: '',
							lawDocFile: [],
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
