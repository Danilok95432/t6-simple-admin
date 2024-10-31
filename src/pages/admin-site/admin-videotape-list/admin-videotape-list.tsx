import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { VideosTable } from 'src/pages/admin-site/admin-videotape-list/components/videos-table/videos-table'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { PlusIconSvg } from 'src/UI/icons/plusIconSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'

export const AdminVideotapeList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Видеолента</title>
			</Helmet>
			<h1>Видеолента</h1>
			<AdminContent className={styles.videotapeListContent} $height='1100px'>
				<AdminButton
					as='link'
					to={`/${AdminRoute.AdminAddVideo}`}
					$icon
					$padding='8px'
					$margin='0 0 20px 0'
				>
					<PlusIconSvg fill='#FFFFFF' />
					Добавить видео
				</AdminButton>
				<VideosTable />
				<AdminButton
					as='link'
					to={`/${AdminRoute.AdminAddVideo}`}
					$icon
					$padding='8px'
					$margin='20px 0 0 0'
				>
					<PlusIconSvg fill='#FFFFFF' />
					Добавить видео
				</AdminButton>
			</AdminContent>
		</>
	)
}
