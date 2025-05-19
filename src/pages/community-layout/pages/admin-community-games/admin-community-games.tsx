import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type GamesInputs, gamesSchema } from './schema'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { TitleSection } from './components/title-section/title-section'
import { GallerySection } from './components/gallery-section/gallery-section'
import { GamesElements } from './components/games-elemets/games-elements'

export const AdminCommunityGames: FC = () => {
	const methods = useForm<GamesInputs>({
		mode: 'onBlur',
		resolver: yupResolver(gamesSchema),
		defaultValues: {},
	})

	const onSubmit: SubmitHandler<GamesInputs> = async (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Игры Атманова Угла</title>
			</Helmet>

			<AdminContent title='Игры Атманова Угла' $backgroundColor='#ffffff'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<GallerySection />
					</form>
				</FormProvider>
				<GamesElements />
			</AdminContent>
		</>
	)
}
