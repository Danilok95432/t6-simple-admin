import { type FC } from 'react'

import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styled from 'styled-components'

type AdminControllersProps = {
	outLink: string
	variant?: '1' | '2'
}

type AdminStyledBtns = {
	$margin?: string
}

const StyledAdminControllers = styled.section<AdminStyledBtns>`
	margin: ${({ $margin }) => $margin ?? '45px 0 0 0'};
	display: flex;
	gap: 20px;
	flex-wrap: wrap;

	._extreme {
		margin-left: auto;
	}
`

export const AdminControllers: FC<AdminControllersProps> = ({
	outLink,
	variant = '1',
	...props
}) => {
	const renderButtonsVariant = (variant: AdminControllersProps['variant']) => {
		switch (variant) {
			case '1':
				return (
					<>
						<AdminButton as='button' type='submit'>
							Применить и продолжить
						</AdminButton>
						<AdminButton as='link' to={outLink} $variant='light'>
							Сохранить и выйти
						</AdminButton>
					</>
				)
			case '2':
				return (
					<>
						<AdminButton as='link' to={outLink}>
							Применить и продолжить
						</AdminButton>
						<AdminButton as='button' type='submit' $variant='light'>
							Сохранить и выйти
						</AdminButton>
						<AdminButton className='_extreme' as='link' to={outLink} $variant='cancel'>
							Отменить изменения
						</AdminButton>
					</>
				)
		}
	}

	return <StyledAdminControllers {...props}>{renderButtonsVariant(variant)}</StyledAdminControllers>
}
