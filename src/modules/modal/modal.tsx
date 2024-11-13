import { type FC, useEffect } from 'react'

import cn from 'classnames'
import { createPortal } from 'react-dom'

import { useAppSelector } from 'src/hooks/store'
import { getModalContent } from 'src/modules/modal/store/modal.selectors'
import { useActions } from 'src/hooks/actions/actions'

import styles from './index.module.scss'

export const Modal: FC = () => {
	const currentModalContent = useAppSelector(getModalContent)

	const { closeModal } = useActions()

	const handleCloseModal = () => {
		closeModal()
	}

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal()
			}
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [closeModal])

	if (!currentModalContent) {
		return null
	}

	return createPortal(
		<div
			className={cn(styles.modal, { [styles.active]: currentModalContent })}
			onClick={handleCloseModal}
		>
			<div className={cn(styles.modalContent)} onClick={(e) => e.stopPropagation()}>
				{currentModalContent}
			</div>
		</div>,
		document.getElementById('modal-root') as HTMLElement,
	)
}
