import { type FC } from 'react'
import {
	type ArticleInputs,
	articleSchema,
} from 'src/pages/community-layout/pages/admin-community-history/schema'

import { Helmet } from 'react-helmet-async'
import cn from 'classnames'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

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
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<AdminSection titleText='Основная статья'>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name='articleName'
								label='Название статьи'
								placeholder='Название статьи'
								margin='0 0 15px 0'
							/>
							<ControlledInput
								className={cn(adminStyles.adminMainInput, styles.articleTextarea)}
								name='articleText'
								label='Текст статьи'
								margin='0'
								isTextarea
							/>
						</AdminSection>
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
