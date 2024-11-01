import { type FC } from 'react'
import { type LocationInputs } from 'src/pages/community-layout/pages/admin-community-location/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const LinksSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<LocationInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'links',
	})

	return (
		<AdminSection titleText='Ссылки' sectionName='linksSection'>
			<ul className={adminStyles.adminDynamicList}>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>Ссылка {idx + 1}</h4>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`links.${idx}.linkText`}
							dynamicError={errors?.links?.[idx]?.linkText}
							label='Текст'
							placeholder='Текст ссылки'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`links.${idx}.linkAddress`}
							dynamicError={errors?.links?.[idx]?.linkAddress}
							label='Адрес URL'
							placeholder='Например, www.site.ru/'
							margin='0'
						/>

						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить ссылку
							</button>
						)}
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							linkText: '',
							linkAddress: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить еще одну ссылку
			</AdminButton>
		</AdminSection>
	)
}
