import { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'
import { useFormContext } from 'react-hook-form'

type SwitchedRadioBtnsProps = {
	name: string
	label?: string
	contentRadio1: ReactNode
	contentRadio2: ReactNode
	valueRadio1: string
	valueRadio2: string
}

export const SwitchedRadioBtns: FC<SwitchedRadioBtnsProps> = ({
	name,
	label,
	contentRadio1,
	contentRadio2,
	valueRadio1,
	valueRadio2,
}) => {
	const { register, watch } = useFormContext()
	const selectedValue = watch(name)
	return (
		<div className={styles.switchedRadioWrapper}>
			{label && <p className={styles.radioLabel}>{label}</p>}
			<div className={styles.switchedRadioBtns}>
				<label>
					<input
						type='radio'
						{...register(name)}
						value={valueRadio1}
						checked={selectedValue === valueRadio1}
					/>
					<span>{contentRadio1}</span>
				</label>
				<label>
					<input
						type='radio'
						{...register(name)}
						value={valueRadio2}
						checked={selectedValue === valueRadio2}
					/>
					<span>{contentRadio2}</span>
				</label>
			</div>
		</div>
	)
}
