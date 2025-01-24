import { type OneNewsInputs, oneNewsSchema } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container } from 'src/UI/Container/Container'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { SwitchedKeyNewsSvg } from 'src/UI/icons/switchedKeyNewsSVG'
import { SwitchedDefaultNewsSvg } from 'src/UI/icons/switchedDefaultNewsSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { MainSection } from './components/main-section/main-section'
import { SeoSection } from './components/seo-section/seo-section'
import { useGetNewsInfoQuery } from 'src/store/news/news.api'
import { useParams } from 'react-router-dom'
import { transformToFormData } from 'src/helpers/utils'
import { useEffect } from 'react'

export const OneNews = () => {
	const { id = '0' } = useParams()

	const { data: newsInfoData } = useGetNewsInfoQuery(id)

	const methods = useForm<OneNewsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneNewsSchema),
		defaultValues: {
			main: true,
			hidden: false,
			news_gallerys: [],
		},
	})

	const onSubmit: SubmitHandler<OneNewsInputs> = (data) => {
		const newsInfoFormData = transformToFormData(data)
		newsInfoFormData.append('id', id)
		/* await saveNewsInfo(newsInfoFormData) */
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
									$variant='switcher'
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
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</Container>
		</>
	)
}
