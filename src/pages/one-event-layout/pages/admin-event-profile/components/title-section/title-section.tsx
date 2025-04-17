import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'
import { CustomText } from 'src/components/custom-text/custom-text'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'

import styles from './title-section.module.scss'

type TitleSectionProps = {
	objectsList?: SelOption[]
	eventTypesList?: SelOption[]
	eventLevelsList?: SelOption[]
	brandsList?: SelOption[]
}

export const TitleSection: FC<TitleSectionProps> = ({
	objectsList,
	eventTypesList,
	eventLevelsList,
	brandsList,
}) => {
	return (
		<AdminSection isBlock={false} className={styles.titleSectionInner}>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='title'
					label='Название события *'
					placeholder='Полное название события'
					margin='0 0 20px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<div className={styles.inputWrapper}>
				<ControlledSelect
					name='objects_list'
					label='Событие проводится от лица *'
					selectOptions={objectsList ?? [{ label: 'Не выбрано', value: '0' }]}
					margin='0 0 20px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Тип и уровень события *
			</CustomText>
			<div className={styles.inputWrapper}>
				<GridRow $margin='0 0 20px 0' $width='100%'>
					<ControlledSelect
						name='event_types_list'
						selectOptions={eventTypesList ?? [{ label: 'Не выбрано', value: '0' }]}
					/>
					<ControlledSelect
						name='event_levels_list'
						selectOptions={eventLevelsList ?? [{ label: 'Не выбрано', value: '0' }]}
					/>
				</GridRow>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_type}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<div className={styles.inputWrapper}>
				<ControlledInput
					name='tags'
					label='Теги события'
					placeholder='первый тег, второй тег, третий тег'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_teg}>
					<InfoIconSvg />
				</Tooltip>
			</div>
		</AdminSection>
	)
}
