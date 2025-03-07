import React, { type FC, type ReactNode, useEffect, useState, useCallback } from 'react'
import { type Accept, useDropzone } from 'react-dropzone'
import { type FileWithPreview } from 'src/types/files'

import { useParams } from 'react-router-dom'
import cn from 'classnames'
import { useFormContext } from 'react-hook-form'
import {
	useDeleteImageByIdMutation,
	useUploadImagesMutation,
} from 'src/store/uploadImages/uploadImages.api'

import { RemoveImageModalSVG } from 'src/UI/icons/RemoveImageModalSVG'
import { RemoveTextFileSvg } from 'src/UI/icons/removeTextFileSVG'
import { ErrorMessage } from '@hookform/error-message'
import { AttachIconSvg } from 'src/UI/icons/attachIconSVG'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { UploadFileSvg } from 'src/UI/icons/uploadFileSVG'
import { FilePreviewsFiles } from '../file-previews-files/file-previews-files'

import styles from './index.module.scss'

type ReactDropzoneProps = {
	name: string
	accept?: Accept
	multiple?: boolean
	maxFiles?: number
	margin?: string
	prompt?: string
	className?: string
	dzAreaClassName?: string
	label?: string
	removeIcon?: ReactNode
	customUploadBtn?: ReactNode
	uploadBtnText?: string
	variant?: 'main' | 'text'
	previewVariant?: 'main' | 'text' | 'sm-img' | 'list' | 'sm-img-edit'
	imgtype?: string
	imageIdFieldName?: string
	imageEdit?: string
}

export const ReactDropzoneFiles: FC<ReactDropzoneProps> = ({
	className,
	dzAreaClassName,
	removeIcon,
	variant = 'main',
	previewVariant,
	name,
	accept,
	multiple = false,
	maxFiles = 1,
	customUploadBtn,
	uploadBtnText = 'Загрузить',
	prompt,
	label,
	margin,
	imgtype = 'news',
	imageIdFieldName,
	imageEdit = '',
}) => {
	const [currentFiles, setCurrentFiles] = useState<FileWithPreview[]>([])
	const [imageIds, setImageIds] = useState<string[]>([])

	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext()

	const [uploadImages] = useUploadImagesMutation()
	const [deleteImageById] = useDeleteImageByIdMutation()

	const { id = '' } = useParams()

	const uploadFile = useCallback(
		async (file: File) => {
			try {
				const formData = new FormData()
				formData.append('itemimage', file)
				formData.append('imgtype', imgtype)
				formData.append('id_item', id)

				const response = await uploadImages(formData).unwrap()

				if (response.status === 'ok') {
					const imageId = response.id_catimage
					return imageId
				} else {
					console.error('Upload failed:', response)
					return null
				}
			} catch (error) {
				console.error('Upload failed:', error)
				return null
			}
		},
		[uploadImages, imgtype],
	)

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			const newFiles: FileWithPreview[] = []
			const uploadedImageIds: string[] = []

			for (const file of acceptedFiles) {
				try {
					const imageId = await uploadFile(file)

					if (imageId) {
						uploadedImageIds.push(imageId)
						const newFile = Object.assign(file, {
							preview: URL.createObjectURL(file),
						})
						newFiles.push(newFile)
					}
				} catch (error) {
					console.error('File upload failed:', error)
				}
			}

			setCurrentFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, maxFiles))
			setImageIds((prevIds) => [...prevIds, ...uploadedImageIds].slice(0, maxFiles))
			setValue(name, newFiles)
		},
		[uploadFile, setValue, name, maxFiles],
	)

	const removeFile = useCallback(
		async (index: number) => {
			const imageIdToRemove = imageIds[index]

			try {
				if (imageIdToRemove) {
					await deleteImageById(imageIdToRemove).unwrap()
				}
				const newFiles = currentFiles.toSpliced(index, 1)
				const newImageIds = imageIds.toSpliced(index, 1)

				setCurrentFiles(newFiles)
				setImageIds(newImageIds)
				setValue(name, newFiles)

				if (imageIdFieldName) {
					setValue(
						imageIdFieldName,
						imageIds.filter((id, i) => i !== index),
					)
				}
			} catch (error) {
				console.error('Delete failed:', error)
			}
		},
		[currentFiles, imageIds, deleteImageById, setValue, name, imageIdFieldName],
	)

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		accept,
		multiple,
		maxFiles,
	})

	useEffect(() => {
		return () => {
			currentFiles?.forEach((file) => URL.revokeObjectURL(file.preview))
		}
	}, [currentFiles])

	if (variant === 'text') {
		return (
			<div className={cn(styles.textFileUpload, className)} style={{ margin: margin ?? '' }}>
				{label && <label>{label}</label>}
				<input {...register(name)} {...getInputProps()} />
				<FilePreviewsFiles
					variant={previewVariant ?? 'text'}
					files={currentFiles}
					removeBtn={removeIcon ?? <RemoveTextFileSvg />}
					removeHandler={removeFile}
				/>
				{currentFiles.length < maxFiles && (
					<div className={styles.textFileController} onClick={open}>
						{customUploadBtn ?? <AddButton icon={<UploadFileSvg />}>{uploadBtnText}</AddButton>}
					</div>
				)}
				{errors[name] && (
					<p className={styles.warningMessage}>
						<ErrorMessage errors={errors} name={name} />
					</p>
				)}
			</div>
		)
	}

	return (
		<div className={cn(styles.reactDropzone, className)} style={{ margin: margin ?? '' }}>
			{label && <label>{label}</label>}
			<FilePreviewsFiles
				variant={previewVariant ?? 'main'}
				files={currentFiles}
				imageEdit={imageEdit}
				removeBtn={removeIcon ?? <RemoveImageModalSVG />}
				removeHandler={removeFile}
			/>
			{currentFiles.length < maxFiles && imageEdit === '' && (
				<div
					className={cn(dzAreaClassName, {
						[styles.activeArea]: isDragActive,
						[styles.dropzoneArea]: !customUploadBtn,
					})}
					{...getRootProps()}
				>
					<input {...register(name)} {...getInputProps()} />
					{customUploadBtn ?? (
						<>
							<span>Прикрепить файл</span>
							<p>
								{prompt ?? 'Перетащите файл на это поле'} <AttachIconSvg />
							</p>
						</>
					)}
				</div>
			)}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
