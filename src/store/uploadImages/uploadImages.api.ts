import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'
import { type FieldValues } from 'react-hook-form'
import { type ImageUploadRespone } from 'src/types/photos'

export const uploadImagesApi = createApi({
	reducerPath: ReducerPath.UploadImages,
	tagTypes: ['ImageUpload', 'ImageDelete'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		uploadImages: build.mutation<ImageUploadRespone, FieldValues>({
			query: (formData) => ({
				url: `images/upload`,
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data;',
				},
				body: formData,
				formData: true,
			}),
			invalidatesTags: ['ImageUpload'],
		}),
		deleteImageById: build.mutation<null, string>({
			query: (imageId) => ({
				url: `images/delete`,
				method: 'DELETE',
				body: { id: imageId },
			}),
			invalidatesTags: ['ImageDelete'],
		}),
	}),
})

export const { useUploadImagesMutation, useDeleteImageByIdMutation } = uploadImagesApi
