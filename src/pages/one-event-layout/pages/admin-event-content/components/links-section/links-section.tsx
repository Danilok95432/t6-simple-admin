import { type FC } from 'react'
import { type EventContentInputs } from 'src/pages/one-event-layout/pages/admin-event-content/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { TrashIconSvg } from 'src/UI/icons/trashIconSVG'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { CustomText } from 'src/components/custom-text/custom-text'

import styles from './index.module.scss'

export const LinksSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<EventContentInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'links',
	})

	return (
		<AdminSection
			titleText='Важные ссылки события'
			sectionName='linksSection'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='isShowLinksSection'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ControlledInput
				name='linksBlockTitle'
				label='Название блока ссылок'
				maxWidth='1140px'
				margin='0 0 25px 0'
			/>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.linkRow} key={field.id}>
						<GridRow className={styles.linkRowInputs}>
							<CustomText>Ссылка {idx + 1}</CustomText>
							<ControlledInput
								name={`links.${idx}.linkText`}
								dynamicError={errors?.links?.[idx]?.linkText}
								placeholder='Текст ссылки'
								maxWidth='1140px'
							/>
							<ControlledInput
								name={`links.${idx}.linkUrl`}
								dynamicError={errors?.links?.[idx]?.linkUrl}
								placeholder='Адрес URL'
							/>
						</GridRow>
						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								<TrashIconSvg />
							</button>
						)}
					</li>
				))}
			</ul>
			{fields.length < 5 && (
				<AddButton
					type='button'
					$margin='35px 0 0 0'
					onClick={() =>
						append(
							{
								linkText: '',
								linkUrl: '',
							},
							{ shouldFocus: false },
						)
					}
				>
					Добавить ссылку
				</AddButton>
			)}
		</AdminSection>
	)
}
