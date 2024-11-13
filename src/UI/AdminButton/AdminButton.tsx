import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as?: 'button' | 'link' | 'route'
	children?: ReactNode
	$margin?: string
	$padding?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'light'
}

type SharedStylesTypes = {
	$padding?: string
	$margin?: string
	$height?: string
	$radius?: string
	$variant?: 'primary' | 'light'
}

const sharedStyles = css<SharedStylesTypes>`
	padding: ${({ $padding }) => $padding ?? '0 24px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	height: ${({ $height }) => $height ?? '45px'};
	border-radius: ${({ $radius }) => $radius ?? '3px'};

	background-color: ${({ $variant }) => {
		if ($variant === 'light') return '#FFFFFF'
		return '#184F71'
	}};
	color: ${({ $variant }) => {
		if ($variant === 'light') return '#002C47'
		return '#ffffff'
	}};
	box-shadow: ${({ $variant }) => {
		if ($variant === 'light') return '0 0 5px 0 rgba(1, 61, 86, 0.2)'
		return 'none'
	}};
	border: none;
	text-decoration: none;
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		background-color: ${({ $variant }) => {
			if ($variant === 'light') return '#ffffff'
			return '#018EA3'
		}};
		color: ${({ $variant }) => {
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
				{children}
			</StyledButton>
		)
	}
	if (as === 'link') {
		return (
			<StyledLink $variant={$variant} {...(props as AnchorProps)}>
				{children}
			</StyledLink>
		)
	}
	if (as === 'route') {
		return (
			<StyledRouteLink $variant={$variant} {...(props as LinkProps)}>
				{children}
			</StyledRouteLink>
		)
	}
	return null
}
