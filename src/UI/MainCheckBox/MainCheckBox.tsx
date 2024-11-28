import React, { useState, type FC, type ReactNode } from 'react'
import cn from 'classnames'

import { CheckMarkSvg } from '../icons/checkMarkSVG'

import styles from './index.module.scss'

type MainCheckBoxProps = {
	svgNode?: ReactNode
}
export const MainCheckBox: FC<MainCheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
	svgNode,
	...props
}) => {
	const [active, setActive] = useState(false)
	return (
		<div className={cn(styles.checkBoxWrapper, props.className)} onClick={() => setActive(!active)}>
			<label className={cn({ [styles._active]: active })}>{active && <CheckMarkSvg />}</label>
			<input type='checkbox' />
		</div>
	)
}
