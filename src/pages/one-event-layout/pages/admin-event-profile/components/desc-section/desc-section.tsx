import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'

import { type FC } from 'react'
import { type SelOption } from 'src/types/select'

import styles from './index.module.scss'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'

type DescSectionProps = {
	ageList?: SelOption[]
	locationsList?: SelOption[]
}

export const DescSection: FC<DescSectionProps> = ({ ageList, locationsList }) => {
	return (
		<AdminSection isBlock={false}>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='description'
					label='Краткое описание *'
					placeholder='Краткое описание события'
					margin='0 0 20px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_short}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<div className={styles.inputWrapper}>
				<ControlledInput
					name='fullinfo'
					label='Подробное описание *'
					placeholder='Подробное описание события'
					isTextarea
					margin='0 0 20px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_textAria}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<div className={styles.inputWrapper}>
				<ControlledInput
					name='conditions'
					label='Условия участия *'
					placeholder='Условия участия в событии'
					isTextarea
					margin='0 0 20px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_textAria}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<GridRow $template='auto/ 0.5fr' $mdTemplate='1fr / 1fr' $margin='0 0 20px 0'>
				<div className={styles.inputWrapper}>
					<ControlledSelect
						label='Возрастной рейтинг *'
						name='age_list'
						selectOptions={ageList ?? [{ label: 'Не выбрано', value: '0' }]}
					/>

					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_age}>
						<InfoIconSvg />
					</Tooltip>
				</div>
			</GridRow>

			<div className={styles.inputWrapper}>
				<ControlledSelect
					label='Площадка *'
					name='locations_list'
					margin='0 0 25px 0'
					selectOptions={locationsList ?? [{ label: 'Не выбрано', value: '0' }]}
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<p className={styles.placeRequest}>
				Если площадки нет в списке, Вы можете <a href='#'>запросить добавление новой площадки</a>
			</p>
		</AdminSection>
	)
}
