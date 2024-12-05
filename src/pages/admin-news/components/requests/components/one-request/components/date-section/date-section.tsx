import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { CustomText } from 'src/components/custom-text/custom-text'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'

export const DateSection = () => {
	return (
		<AdminSection isBlock={false}>
			<CustomText $margin='0 0 5px 0' $fontWeight='600'>
				Желаемая дата публикации
			</CustomText>
			<FlexRow $alignItems='center'>
				<ControlledDateInput
					className={adminStyles.adminDateInput}
					name='datePublish'
					dateFormat='dd.MM.yyyy'
					placeholder='дд.мм.гггг'
					margin='0'
				/>
				<MainCheckBox checked={false} label='Как в оригинальной новости / видеозаписи' />
			</FlexRow>
		</AdminSection>
	)
}
