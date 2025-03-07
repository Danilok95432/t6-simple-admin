import { type FC, type ReactNode } from 'react'
import { type FileWithPreview } from 'src/types/files'

import { ImagesFormat } from 'src/helpers/consts'
import { convertBytesToKilobytes, defineFileFormat } from 'src/helpers/utils'
import styles from './index.module.scss'

type FilePreviewsProps = {
	files: FileWithPreview[]
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
					<li key={file.preview}>
						{file.type.split('/')[0] === 'image' ? <img src={file.preview} alt='' /> : null}
						<a href={file.path} download>
							{file.name}
						</a>
						<p>
							{defineFileFormat(file.name)}-файл, {convertBytesToKilobytes(file.size)} Кбайт
						</p>

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

	if (variant === 'sm-img-edit') {
		return (
			<ul className={styles.smImgFilesList}>
				<li>
					<img src={imageEdit} alt='' />
					<a href=''>{imageEdit.split('/')[imageEdit.split('/').length - 1]}</a>
					{removeBtn && (
						<button
							className={styles.removeTextBtn}
							type='button'
							onClick={() => removeHandler?.(0)}
						>
							{removeBtn}
						</button>
					)}
				</li>
			</ul>
		)
	}

	if (variant === 'sm-img') {
		return (
			<ul className={styles.smImgFilesList}>
				{files.map((file, idx) => (
					<li key={file.preview}>
						{file.type.split('/')[0] === 'image' ? <img src={file.preview} alt='' /> : null}
						<a href={file.path} download>
							{file.name}
						</a>
						<p>{convertBytesToKilobytes(file.size)} Кбайт</p>

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
					<li key={file.preview}>
						{removeBtn && (
							<button
								className={styles.removeBtn}
								type='button'
								onClick={() => removeHandler?.(idx)}
							>
								{removeBtn}
							</button>
						)}
						{ImagesFormat.includes(defineFileFormat(file.name)) ? (
							<div className={styles.imgFileWrapper}>
								<img
									src={file.preview}
									alt={file.name}
									onLoad={() => {
										URL.revokeObjectURL(file.preview)
									}}
								/>
							</div>
						) : (
							<div className={styles.textFile}>
								<span></span>
								<a href={file.path} download>
									{file.name}
								</a>
							</div>
						)}
					</li>
				))}
			</ul>
		)
	}

	return (
		<div className={styles.mainFile}>
			<a href={files[0].path} download>
				{files[0].name}
			</a>
			<button className={styles.mainRemoveBtn} type='button' onClick={() => removeHandler?.(0)}>
				{removeBtn}
			</button>
		</div>
	)
}
