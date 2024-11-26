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
	padding: ${({ $padding, $variant }) => {
		if ($variant === 'cancel') return '0 24px 0 32px'
		return $padding ?? '0 24px'
	}};
	margin: ${({ $margin }) => $margin ?? '0'};
	height: ${({ $height }) => $height ?? '45px'};
	font-size: ${({ $fontSize }) => $fontSize ?? '14px'};
	border-radius: ${({ $radius }) => $radius ?? '3px'};

	background: ${({ $variant }) => {
		if ($variant === 'cancel')
			return '#FFFFFF url(\'data:image/svg+xml,<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6.22656" r="6" fill="%23D9001B"/><rect width="8.12592" height="0.325037" transform="matrix(0.706782 -0.707431 0.706782 0.707431 3.02344 8.99414)" fill="white" stroke="white" stroke-linejoin="round"/><rect width="8.12592" height="0.325037" transform="matrix(-0.706782 -0.707431 0.706782 -0.707431 8.74219 9.20508)" fill="white" stroke="white" stroke-linejoin="round"/></svg>\') no-repeat 8% center'
		if ($variant === 'light') return '#FFFFFF'
		return '#184F71'
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
