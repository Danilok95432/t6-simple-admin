import cnBind from 'classnames/bind'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const NewAreaSection = () => {
	const cx = cnBind.bind(adminStyles)
	return (
		<AdminSection className={styles.newAreaSection} sectionName='newAreaSection'>
			<h4>Новая площадка</h4>
			<PromptInput promptContent='Например, Дворец Спорта Трудящихся. Город или полный адрес в этом поле указывать не нужно.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='newAreaName'
					label='Название площадки *'
					placeholder='Понятное название площадки'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Например, г. Москва или с. Атманов Угол Тамбовской области.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='newAreaLocation'
					label='Населенный пункт *'
					placeholder='Название населенного пункта'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Опишите площадку в нескольких словах: первый ледовый дворец города Когалым.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='newAreaDesc'
					label='Описание'
					placeholder='Краткое описание площадки'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Точный почтовый адрес площадки (если он есть).'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='newAreaAddress'
					label='Точный адрес'
					placeholder='Индекс, город, улица, дом'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Если у площадки нет точного адреса, но требуется указать её расположение на карте, вставьте в это поле код виджета карт Яндекса.'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='newAreaWidget'
					label='Код виджета Яндекс'
					placeholder='Вставьте код виджета'
					margin='0'
					isTextarea
				/>
			</PromptInput>
			<PromptInput
				promptContent='Если в списке нет конкретно Вашего типа, выберите максимально близкий или похожий на нужный тип.'
				$margin='0 0 13px 0'
			>
				<ControlledSelect
					className={adminStyles.adminSelect}
					name='newAreaType'
					label='Тип площадки *'
					selectOptions={[
						{ label: 'Выбрать тип площадки из списка', value: '0' },
						{ label: 'тип 1', value: '1' },
						{ label: 'тип 2', value: '2' },
					]}
					margin='0'
				/>
			</PromptInput>
			<p className={styles.newAreaPrompt}>
				Новая площадка автоматически сохраняется внутри Вашего события. Если Вы хотите сохранить ее
				в справочнике для дальнейшего выбора или сделать доступной для других организаторов,
				отметьте нужную опцию ниже.
			</p>

			<ControlledCheckbox
				className={adminStyles.adminCheckbox}
				name='saveNewArea'
				label='Сохранить новую площадку в справочнике (потребуется модерация: это может занять до 2х суток)'
				type='checkbox'
				$margin='0 0 15px 0'
			/>
			<ControlledCheckbox
				className={adminStyles.adminCheckbox}
				name='availableNewArea'
				label='Сделать новую площадку доступной для других организаторов'
				type='checkbox'
			/>
		</AdminSection>
	)
}
