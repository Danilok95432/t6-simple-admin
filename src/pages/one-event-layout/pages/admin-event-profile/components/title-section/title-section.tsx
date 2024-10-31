import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'
import { CustomText } from 'src/components/custom-text/custom-text'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const TitleSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Не указывайте в названии события дату проведения или описание: для этого есть отдельные поля'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='eventName'
					label='Название события *'
					placeholder='Полное название события'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Эти данные нужны для того, чтобы событие нормально искалось в списках'>
				<div>
					<CustomText $margin='0 0 5px 0' $fontWeight='600'>
						Тип и уровень события *
					</CustomText>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='eventType'
							selectOptions={[
								{ label: 'выбрать тип из списка', value: '0' },
								{ label: 'тип 1', value: '1' },
								{ label: 'тип 2', value: '2' },
							]}
							margin='0 0 5px 0'
						/>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='eventLevel'
							selectOptions={[
								{ label: 'выбрать уровень', value: '0' },
								{ label: 'уровень 1', value: '1' },
								{ label: 'уровень 2', value: '2' },
							]}
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
			<PromptInput promptContent='Адрес интернет-сайта или страницы в социальной сети'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='eventSite'
					label='Интернет-сайт'
					placeholder='www.example.com'
					margin='0'
				/>
			</PromptInput>
			<PromptInput
				promptContent='Вводите теги через запятую. Тег может состоять из нескольких слов, разделенных пробелами'
				$margin='0'
			>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='eventTags'
					label='Теги события'
					placeholder='первый тег, второй тег, третий тег'
					margin='0'
				/>
			</PromptInput>
		</AdminSection>
	)
}
