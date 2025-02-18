import { type OneNewsInputs, oneNewsSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	useGetNewIdNewsQuery,
	useGetNewsInfoQuery,
	useSaveNewsInfoMutation,
} from 'src/store/news/news.api'
import { formatDate, transformToFormData } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { SwitchedKeyNewsSvg } from 'src/UI/icons/switchedKeyNewsSVG'
import { SwitchedDefaultNewsSvg } from 'src/UI/icons/switchedDefaultNewsSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MainSection } from './components/main-section/main-section'
import { SeoSection } from './components/seo-section/seo-section'

import styles from './index.module.scss'

export const OneNews = () => {
	const { id = '0' } = useParams()

	const { data: newsInfoData } = useGetNewsInfoQuery(id)
	const [saveNewsInfo] = useSaveNewsInfoMutation()
	const { refetch: getNewId } = useGetNewIdNewsQuery(null)

	const methods = useForm<OneNewsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneNewsSchema),
		defaultValues: {
			main: true,
			hidden: false,
			news_gallerys: [],
		},
	})
	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneNewsInputs> = async (data) => {
		const dateFormat = formatDate(data.itemdate)
		if (dateFormat) data.itemdate = dateFormat
		const newsInfoFormData = transformToFormData(data)
		let newsId = id

		if (id === 'new') {
			const newIdResponse = await getNewId().unwrap()
			newsId = newIdResponse.id
			newsInfoFormData.append('id', newsId)
		} else newsInfoFormData.append('id', newsId)
		const res = await saveNewsInfo(newsInfoFormData)
		if (res) markAsSent(true)
	}

	useEffect(() => {
		if (newsInfoData) {
			methods.reset({ ...newsInfoData })
		}
	}, [newsInfoData])

	return (
		<>
			<h4 className={styles.titleNewsForm}>Одна новость</h4>
			<Container>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<MainSection />
								<SeoSection />
							</div>
							<div className={styles.oneNewsContentRight}>
								<SwitchedRadioBtns
									name='main'
									label='Ключевая новость'
									$variant='keySwitcher'
									contentRadio1={
										<>
											<SwitchedKeyNewsSvg />
											Ключевая
										</>
									}
									contentRadio2={
										<>
											<SwitchedDefaultNewsSvg />
											Обычная
										</>
									}
								/>
								<SwitchedRadioBtns
									name='hidden'
									label='Спрятать'
									$variant='switcher'
									contentRadio1={
										<>
											<SwitchedHiddenSvg />
											Спрятать
										</>
									}
									contentRadio2={
										<>
											<SwitchedShowSvg />
											Показать
										</>
									}
								/>
							</div>
						</div>
						<AdminControllers
							variant='4'
							outLink={`/${AdminRoute.AdminNews}/${AdminRoute.AdminNewsList}`}
							isSent={isSent}
						/>
					</form>
				</FormProvider>
			</Container>
		</>
	)
}
