import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type ArticleInputs,
	articleSchema,
} from 'src/pages/community-layout/pages/admin-community-history/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { QuillEditor } from 'src/components/quill-editor/quill-editor'

export const AdminCommunityHistory: FC = () => {
	const methods = useForm<ArticleInputs>({
		mode: 'onBlur',
		resolver: yupResolver(articleSchema),
	})

	const onSubmit: SubmitHandler<ArticleInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>История</title>
			</Helmet>
			<AdminContent title='История' link='#' $backgroundColor='#ffffff'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<AdminSection isBlock={false}>
							<ControlledInput
								name='articleName'
								label='Название основной статьи'
								placeholder='Название статьи'
								margin='0 0 20px 0'
							/>
							<QuillEditor name='articleText' label='Текст статьи' />
						</AdminSection>
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
