import { type OneNewsInputs, oneNewsSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useGetNewsInfoQuery, useSaveNewsInfoMutation } from 'src/store/news/news.api'
import { booleanToNumberString, formatDate, transformToFormData } from 'src/helpers/utils'
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
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const methods = useForm<OneNewsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneNewsSchema),
		defaultValues: {
			main: false,
			hidden: false,
			news_gallerys: [],
			description: '',
			keywords: [],
		},
	})
	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneNewsInputs> = async (data) => {
		const dateFormat = formatDate(data.itemdate)
		if (dateFormat) data.itemdate = dateFormat
		const serverData = {
			title: data.title,
			itemdate: data.itemdate,
			tags: data.tags,
			news_gallerys: data.news_gallerys,
			id_gallery: data.news_gallerys,
			short: data.short,
			full: data.full,
			photo: data.photo,
			description: data.description,
			keywords: data.keywords,
			main: booleanToNumberString(data.main),
			hidden: booleanToNumberString(data.hidden),
		}
		const newsInfoFormData = transformToFormData(serverData)
		const newsId = id
		newsInfoFormData.append('id', newsId)
		const res = await saveNewsInfo(newsInfoFormData)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.AdminNews}/${AdminRoute.AdminNewsList}`)
			}
		}
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
								<MainSection
									galleryOptions={newsInfoData?.news_gallerys}
									photo={newsInfoData?.photo}
									photos={newsInfoData?.photos}
								/>
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
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
		</>
	)
}
