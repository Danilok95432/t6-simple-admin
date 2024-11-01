import { type FC } from 'react'
import { type LocationInputs } from 'src/pages/community-layout/pages/admin-community-location/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const EmailsSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<LocationInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'emails',
	})

	return (
		<AdminSection titleText='Электронная почта (e-mail)' sectionName='emailsSection'>
			<ul className={adminStyles.adminDynamicList}>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>{idx + 1} адрес</h4>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`emails.${idx}.emailOwner`}
							dynamicError={errors?.emails?.[idx]?.emailOwner}
							label='Чей адрес'
							placeholder='Например, ....'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`emails.${idx}.emailAddress`}
							dynamicError={errors?.emails?.[idx]?.emailAddress}
							label='Адрес e-mail'
							placeholder='Адрес e-mail'
							margin='0'
						/>

						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить e-mail
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
							emailOwner: '',
							emailAddress: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить еще один адрес
			</AdminButton>
		</AdminSection>
	)
}
