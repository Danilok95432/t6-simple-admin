import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import cnBind from 'classnames/bind'

import styles from './index.module.scss'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as: 'link' | 'button' | 'route'
	children?: ReactNode
	svgNode?: ReactNode
}

export const MainButton: FC<ButtonComponentProps & (ButtonProps | AnchorProps | LinkProps)> = ({
	children,
	svgNode,
	as,
	...props
}) => {
	const cx = cnBind.bind(styles)

	if (as === 'link')
		return (
			<a
				{...(props as AnchorProps)}
				className={cx(styles.mainButton, props.className, { _iconInput: svgNode })}
			>
				{svgNode}
				{children}
			</a>
		)
	if (as === 'button')
		return (
			<button
				{...(props as ButtonProps)}
				className={cx(styles.mainButton, props.className, { _iconInput: svgNode })}
			>
				{svgNode}
				{children}
			</button>
		)
	if (as === 'route')
		return (
			<Link
				{...(props as LinkProps)}
				className={cx(styles.routeLink, props.className, { _iconInput: svgNode })}
			>
				{svgNode}
				{children}
			</Link>
		)
	return null
}
