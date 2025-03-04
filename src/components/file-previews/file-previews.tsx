import { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'
import { type ImageItemWithText } from 'src/types/photos'
import { useActions } from 'src/hooks/actions/actions'
import { ImageModal } from 'src/modals/images-modal/images-modal'

type FilePreviewsProps = {
	files: ImageItemWithText[]
	removeBtn?: ReactNode
	removeHandler?: (idx: number) => void
	variant?: 'main' | 'text' | 'sm-img' | 'list' | 'img-list' | 'culture-img-list'
	uploadBtn?: ReactNode
}
export const FilePreviews: FC<FilePreviewsProps> = ({
	files,
	removeBtn,
	removeHandler,
	variant = 'sm-img',
	uploadBtn,
}) => {
	const { openModal } = useActions()
	if (!files.length && variant !== 'culture-img-list') return null
	if (variant === 'sm-img') {
		return (
			<ul className={styles.smImgFilesList}>
				{files.map((img, idx) => (
					<li key={img.id}>
						<div className={styles.smImgWrapper}>
							<img
								src={img.thumbnail}
								alt={img.title}
								onLoad={() => {
									URL.revokeObjectURL(img.thumbnail)
								}}
							/>
							{removeBtn && (
								<button
									className={styles.removeTextBtn}
									type='button'
									onClick={() => removeHandler?.(idx)}
								>
									{removeBtn}
								</button>
							)}
						</div>
						<p>{img.title}</p>
					</li>
				))}
			</ul>
		)
	}

	if (variant === 'img-list') {
		return (
			<ul className={styles.filesList}>
				{files.map((file, idx) => (
					<li key={file.id}>
						<div className={styles.imgFileWrapper}>
							<img
								src={file.thumbnail}
								alt={file.title}
								onLoad={() => {
									URL.revokeObjectURL(file.thumbnail)
								}}
								onClick={() => openModal(<ImageModal />)}
							/>
							<p className={styles.titleImg}>{file.title}</p>
							<p className={styles.authorImg}>{file.author}</p>
							{removeBtn && (
								<button
									className={styles.removeBtn}
									type='button'
									onClick={() => removeHandler?.(idx)}
								>
									{removeBtn}
								</button>
							)}
						</div>
					</li>
				))}
			</ul>
		)
	}

	if (variant === 'culture-img-list') {
		return (
			<ul className={styles.filesList}>
				{files.map((file, idx) => (
					<li key={file.id}>
						<div className={styles.imgFileWrapper}>
							<img
								src={file.thumbnail}
								alt={file.title}
								onLoad={() => {
									URL.revokeObjectURL(file.thumbnail)
								}}
								onClick={() => openModal(<ImageModal />)}
							/>
							<p className={styles.titleImg}>{file.title}</p>
							<p className={styles.authorImg}>{file.author}</p>
							{removeBtn && (
								<button
									className={styles.removeBtn}
									type='button'
									onClick={() => removeHandler?.(idx)}
								>
									{removeBtn}
								</button>
							)}
						</div>
					</li>
				))}
				{uploadBtn && <li className={styles.addBtn}>{uploadBtn}</li>}
			</ul>
		)
	}

	return (
		<div className={styles.mainFile}>
			<a href={files[0].thumbnail} download>
				{files[0].title}
			</a>
			<button className={styles.mainRemoveBtn} type='button' onClick={() => removeHandler?.(0)}>
				{removeBtn}
			</button>
		</div>
	)
}
