import { type OneVideoInputs, oneVideoSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useGetVideoInfoQuery, useSaveVideoInfoMutation } from 'src/store/videos/videos.api'
import { booleanToNumberString, formatDate, transformToFormData } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MainSection } from './components/main-section/main-section'
import { SwitchedKeyNewsSvg } from 'src/UI/icons/switchedKeyNewsSVG'
import { SwitchedDefaultNewsSvg } from 'src/UI/icons/switchedDefaultNewsSVG'

import styles from './index.module.scss'

export const OneVideo = () => {
	const { id = '0' } = useParams()
	const { data: videoInfoData } = useGetVideoInfoQuery(id)
	const [saveVideoInfo] = useSaveVideoInfoMutation()

	const methods = useForm<OneVideoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneVideoSchema),
		defaultValues: {
			photo: [],
			key: false,
			hidden: false,
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneVideoInputs> = async (data) => {
		const dateFormat = formatDate(data.itemdate)
		if (dateFormat) data.itemdate = dateFormat
		const serverData = {
			title: data.title,
			itemdate: data.itemdate,
			tags: data.tags,
			short: data.short,
			vkvideo: data.vkvideo,
			vkexport: data.vkexport,
			photo: data.photo,
			key: booleanToNumberString(data.key),
			hidden: booleanToNumberString(data.hidden),
		}
		const videoInfoFormData = transformToFormData(serverData)
		const videoId = id
		videoInfoFormData.append('id', videoId)
		const res = await saveVideoInfo(videoInfoFormData)
		if (res) markAsSent(true)
	}

	useEffect(() => {
		if (videoInfoData) {
			methods.reset({ ...videoInfoData })
		}
	}, [videoInfoData])

	return (
		<>
			<h4 className={styles.titleVideoForm}>Видеозапись</h4>
			<Container>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneVideoContent}>
							<div className={styles.oneVideoContentLeft}>
								<MainSection photo={videoInfoData?.photo} />
							</div>
							<div className={styles.oneVideoContentRight}>
								<SwitchedRadioBtns
									name='key'
									label='Ключевая запись'
									$variant='keySwitcher'
									contentRadio1={
										<>
											<SwitchedKeyNewsSvg />
											Ключевое
										</>
									}
									contentRadio2={
										<>
											<SwitchedDefaultNewsSvg />
											Обычное
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
							outLink={`/${AdminRoute.AdminNews}/${AdminRoute.AdminVideosList}`}
							isSent={isSent}
						/>
					</form>
				</FormProvider>
			</Container>
		</>
	)
}
