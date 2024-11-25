import React, { type FC } from 'react'
import { Controller, type ControllerProps, type FieldError, useFormContext } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'

interface QuillEditorProps extends Omit<ControllerProps, 'render'> {
	name: string
	rules?: ControllerProps['rules']
	dynamicError?: FieldError | undefined
	label?: string
}

type StyledEditorWrapperProps = {
	$heightEditor?: string
	$maxWidth?: string
}

const StyledEditorWrapper = styled.div<StyledEditorWrapperProps>`
	label {
		display: block;
		font-size: 14px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		margin-bottom: 5px;
	}

	.ql-snow {
		border: 1px solid #afafaf;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
	}

	.ql-toolbar {
		border-radius: 3px 3px 0 0;
		max-width: ${({ $maxWidth }) => $maxWidth ?? 'auto'};
	}

	.ql-container {
		border-radius: 0 0 3px 3px;
		height: ${({ $heightEditor }) => $heightEditor ?? '750px'};
		max-width: ${({ $maxWidth }) => $maxWidth ?? 'auto'};
	}

	.warningMessage {
		color: #f00000;
		font-size: 14px;
		line-height: 1;
		padding-top: 5px;
	}
`

export const QuillEditor: FC<QuillEditorProps & StyledEditorWrapperProps> = ({
	name,
	rules,
	dynamicError,
	label,
	$heightEditor,
	$maxWidth,
	...rest
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	return (
		<StyledEditorWrapper $heightEditor={$heightEditor} $maxWidth={$maxWidth}>
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
			{dynamicError && <p className='warningMessage'>{dynamicError.message}</p>}
			{errors[name] && (
				<p className='warningMessage'>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</StyledEditorWrapper>
	)
}
