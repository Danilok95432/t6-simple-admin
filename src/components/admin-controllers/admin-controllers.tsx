import { type FC } from 'react'

import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'

type AdminControllersProps = {
	outLink: string
	variant?: '1' | '2'
}

export const AdminControllers: FC<AdminControllersProps> = ({ outLink, variant = '1' }) => {
	if (variant === '1') {
		return (
			<section className={styles.adminControllers}>
				<AdminButton as='button' type='submit'>
					Применить и продолжить
				</AdminButton>
				<AdminButton as='link' to={outLink} $variant='light'>
					Сохранить и выйти
				</AdminButton>
			</section>
		)
	}

	return (
		<section className={styles.adminControllers}>
			<AdminButton as='link' to={outLink}>
				Применить и продолжить
			</AdminButton>
			<AdminButton as='button' type='submit' $variant='light'>
				Сохранить и выйти
			</AdminButton>
			<AdminButton className={styles.cancelBtn} as='link' $variant='light' to={outLink}>
				Отменить изменения
			</AdminButton>
		</section>
	)
}
