import React, { type FC } from 'react'
import { Controller, type ControllerProps, type FieldError, useFormContext } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import styles from './index.module.scss'
interface QuillEditorProps extends Omit<ControllerProps, 'render'> {
	name: string
	rules?: ControllerProps['rules']
	dynamicError?: FieldError | undefined
	label?: string
}

export const QuillEditor: FC<QuillEditorProps> = ({
	name,
	rules,
	dynamicError,
	label,
	...rest
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	return (
		<div className={styles.editorWrapper}>
			{label && <label>{label}</label>}
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => (
					<ReactQuill
						{...field}
						{...rest}
						onChange={(content, delta, source, editor) => field.onChange(editor.getHTML())}
					/>
				)}
			/>
			{dynamicError && <p className={styles.warningMessage}>{dynamicError.message}</p>}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
