import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { CancelVariantBtnSvg } from 'src/UI/icons/cancelVariantBtnSVG'

import styled, { css } from 'styled-components'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as?: 'button' | 'link' | 'route'
	children?: ReactNode
	$margin?: string
	$padding?: string
	$fontSize?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'light' | 'cancel'
}

type SharedStylesTypes = {
	$padding?: string
	$fontSize?: string
	$margin?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'light' | 'cancel'
}

const sharedStyles = css<SharedStylesTypes>`
	padding: ${({ $padding }) => $padding ?? '0 24px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	height: ${({ $height }) => $height ?? '45px'};
	font-size: ${({ $fontSize }) => $fontSize ?? '14px'};
	border-radius: ${({ $radius }) => $radius ?? '3px'};

	background: ${({ $variant }) => {
		if ($variant === 'primary') return '#184F71'
		return '#ffffff'
	}};
	color: ${({ $variant }) => {
		if ($variant === 'cancel') return '#D9001B'
		if ($variant === 'light') return '#002C47'
		return '#ffffff'
	}};
	box-shadow: ${({ $variant }) => {
		if ($variant === 'primary') return 'none'
		return '0 0 5px 0 rgba(1, 61, 86, 0.2)'
	}};
	border: none;
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 5px;
	justify-content: center;

	transition: all 0.3s;

	&:hover {
		background-color: ${({ $variant }) => {
			if ($variant === 'cancel') return '#ffffff'
			if ($variant === 'light') return '#ffffff'
			return '#018EA3'
		}};
		color: ${({ $variant }) => {
			if ($variant === 'cancel') return '#D9001B'
			if ($variant === 'light') return '#018EA3'
			return '#ffffff'
		}};
	}
`

const StyledButton = styled.button<SharedStylesTypes>`
	${sharedStyles}
`
const StyledLink = styled.a<SharedStylesTypes>`
	${sharedStyles}
`
const StyledRouteLink = styled(Link)<SharedStylesTypes>`
	${sharedStyles}
`

export const AdminButton: FC<ButtonComponentProps & (ButtonProps | AnchorProps | LinkProps)> = ({
	children,
	as = 'button',
	$variant = 'primary',
	...props
}) => {
	if (as === 'button') {
		return (
			<StyledButton $variant={$variant} {...(props as ButtonProps)}>
				{$variant === 'cancel' && <CancelVariantBtnSvg />}
				{children}
			</StyledButton>
		)
	}
	if (as === 'link') {
		return (
			<StyledLink $variant={$variant} {...(props as AnchorProps)}>
				{$variant === 'cancel' && <CancelVariantBtnSvg />}
				{children}
			</StyledLink>
		)
	}
	if (as === 'route') {
		return (
			<StyledRouteLink $variant={$variant} {...(props as LinkProps)}>
				{$variant === 'cancel' && <CancelVariantBtnSvg />}
				{children}
			</StyledRouteLink>
		)
	}
	return null
}
