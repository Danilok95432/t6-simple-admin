import React, { type FC, useEffect } from 'react'

import { useController, useFormContext } from 'react-hook-form'
import cn from 'classnames'
import { ErrorMessage } from '@hookform/error-message'

import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

import styles from './index.module.scss'
import styled from 'styled-components'

type RadioOption = {
	label: string
	value: string
}

type ControlledCheckboxProps = {
	name: string
	type: 'checkbox' | 'radio'
	options?: RadioOption[]
	required?: boolean
	label?: string
	className?: string
	disabled?: boolean
	checked?: boolean
	value?: string
}

type CheckboxInputProps = {
	$margin?: string
	$marginMobile?: string
}

const StyledCheckboxWrapper = styled.div<CheckboxInputProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	@media (max-width: 1024px) {
		margin: ${({ $marginMobile, $margin }) => $marginMobile ?? $margin ?? '0'};
	}
`

export const ControlledCheckbox: FC<ControlledCheckboxProps & CheckboxInputProps> = ({
	name,
	type,
	label,
	className,
	required,
	options,
	$margin,
	$marginMobile,
	disabled,
}) => {
	const {
		register,
		setValue,
		watch,
		control,
		formState: { errors },
	} = useFormContext()

	const { field } = useController({ name, control })

	const handleCheckboxChange = () => {
		setValue(name, !watch(name))
	}

	useEffect(() => {
		if (disabled) {
			setValue(name, false)
		}
	}, [disabled])

	if (type === 'radio') {
		return (
			<StyledCheckboxWrapper
				className={cn(styles.radioInputs, className)}
				$margin={$margin}
				$marginMobile={$marginMobile}
			>
				{options?.map((option) => (
					<label key={option.value}>
						<input
							type='radio'
							{...field}
							value={option.value}
							checked={field.value === option.value}
							onChange={() => field.onChange(option.value)}
						/>
						{option.label}
					</label>
				))}
			</StyledCheckboxWrapper>
		)
	}

	return (
		<StyledCheckboxWrapper
			className={cn(styles.checkboxEl, className)}
			$margin={$margin}
			$marginMobile={$marginMobile}
		>
			<div
				className={cn(styles.inputWrapper, { [styles._disabled]: disabled })}
				onClick={handleCheckboxChange}
			>
				<label className={cn({ [styles._active]: watch(name) })}>
					{watch(name) && <CheckMarkSvg />}
				</label>
				<input
					type='checkbox'
					{...register(name)}
					className={styles.checkboxInput}
					required={required}
				/>
				{label && <p>{label}</p>}
			</div>

			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</StyledCheckboxWrapper>
	)
}
