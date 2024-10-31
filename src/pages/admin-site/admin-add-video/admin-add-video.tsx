import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { VideoForm } from 'src/pages/admin-site/components/video-form/video-form'

export const AdminAddVideo: FC = () => {
	return (
		<>
			<Helmet>
				<title>Видеолента</title>
			</Helmet>
			<h1>Добавить видеозапись</h1>
			<AdminContent $padding='20px 30px 35px'>
				<VideoForm />
			</AdminContent>
		</>
	)
}
