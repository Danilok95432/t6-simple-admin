import { type FC, type ReactNode } from 'react'
import { type FileItem } from 'src/types/files'

import { defineFileFormat } from 'src/helpers/utils'
import styles from './index.module.scss'

type FilePreviewsProps = {
	files: FileItem[]
	removeBtn?: ReactNode
	removeHandler?: (idx: number) => void
	variant?: 'main' | 'text' | 'sm-img' | 'list' | 'sm-img-edit'
	imageEdit?: string
}
export const FilePreviewsFiles: FC<FilePreviewsProps> = ({
	files,
	removeBtn,
	removeHandler,
	variant = 'main',
	imageEdit = '',
}) => {
	if (!files.length && imageEdit === '') return null

	if (variant === 'text') {
		return (
			<ul className={styles.textFilesList}>
				{files.map((file, idx) => (
					<li key={file.id}>
						<a href={file.url} download>
							{file.originalname}
						</a>
						<p>{defineFileFormat(file.originalname ?? '')}-файл</p>

						{removeBtn && (
							<button
								className={styles.removeTextBtn}
								type='button'
								onClick={() => removeHandler?.(idx)}
							>
								{removeBtn}
							</button>
						)}
					</li>
				))}
			</ul>
		)
	}

	if (variant === 'list') {
		return (
			<ul className={styles.filesList}>
				{files.map((file, idx) => (
					<li key={file.id}>
						{removeBtn && (
							<button
								className={styles.removeBtn}
								type='button'
								onClick={() => removeHandler?.(idx)}
							>
								{removeBtn}
							</button>
						)}
						<div className={styles.textFile}>
							<span></span>
							<a href={file.url} download>
								{file.originalname}
							</a>
						</div>
					</li>
				))}
			</ul>
		)
	}

	return (
		<div className={styles.mainFile}>
			<a href={files[0].url} download>
				{files[0].originalname}
			</a>
			<button className={styles.mainRemoveBtn} type='button' onClick={() => removeHandler?.(0)}>
				{removeBtn}
			</button>
		</div>
	)
}
