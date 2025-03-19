import { type FileWithPath } from 'react-dropzone'

export interface FileWithPreview extends FileWithPath {
	preview: string
}

export type FileItem = {
	id: string
	url: string
	originalname?: string
}

export type FileInfoResponse = {
	id_catfile: string
	url: string
	originalname?: string
}

export type FileNewIdResponse = {
	id: string
	status: string
}

export type FileUploadRespone = {
	id_catfile: string
	url: string
	originalname?: string
	status: string
}
