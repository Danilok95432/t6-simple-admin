import { type FC } from 'react'
import {
	type CommunityCultureInputs,
	communityCultureSchema,
} from 'src/pages/community-layout/pages/admin-community-culture/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import { FlexRow } from 'src/components/flex-row/flex-row'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { CultureElements } from 'src/pages/community-layout/pages/admin-community-culture/components/culture-elements/culture-elements'

export const AdminCommunityCulture: FC = () => {
	const methods = useForm<CommunityCultureInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communityCultureSchema),
		defaultValues: {
			galleryImages: [],
		},
	})

	const onSubmit: SubmitHandler<CommunityCultureInputs> = (data) => {
		console.log(data)
		console.log(methods.getValues('galleryImages'))
	}

	return (
		<>
			<Helmet>
				<title>Материальная культура</title>
			</Helmet>
			<AdminContent title='Материальная культура' $backgroundColor='#ffffff'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<QuillEditor
							$heightEditor='310px'
							name='cultureText'
							label='Текст о материальной культуре'
						/>
						<ReactDropzone
							margin='30px 0 0 0'
							label={`Галерея изображений (${methods?.watch('galleryImages')?.length} из 8)`}
							previewVariant='list'
							name='galleryImages'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={8}
							multiple
							customUploadBtn={<AddButton>Добавить фото</AddButton>}
						/>
						<FlexRow $margin='25px 0 50px 0' $gap='15px'>
							<AdminButton as='button' type='submit'>
								Сохранить
							</AdminButton>
							<AdminButton as='link' to='/' $variant='light'>
								Отменить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
				<CultureElements />
			</AdminContent>
		</>
	)
}
