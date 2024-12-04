import React, { useState, type FC, type ReactNode } from 'react'
import cn from 'classnames'

import { CheckMarkSvg } from '../icons/checkMarkSVG'

import styles from './index.module.scss'

type MainCheckBoxProps = {
	svgNode?: ReactNode
	checked: boolean
	label?: string
	handleChange?: (active: boolean) => void
}
export const MainCheckBox: FC<MainCheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
	svgNode,
	checked,
	label,
	handleChange,
	...props
}) => {
	const [active, setActive] = useState(checked)
	return (
		<div
			className={cn(styles.checkBoxWrapper, props.className)}
			onClick={() => {
				setActive(!active)
				if (handleChange) handleChange(!active)
			}}
		>
			<label className={cn({ [styles._active]: active })}>{active && <CheckMarkSvg />}</label>
			<input type='checkbox' />
			{label && <p>{label}</p>}
		</div>
	)
}
