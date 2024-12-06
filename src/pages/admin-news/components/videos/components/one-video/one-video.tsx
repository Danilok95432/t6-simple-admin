import { type OneVideoInputs, oneVideoSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container } from 'src/UI/Container/Container'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MainSection } from './components/main-section/main-section'

import styles from './index.module.scss'

export const OneVideo = () => {
	const methods = useForm<OneVideoInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneVideoSchema),
		defaultValues: {
			mainImg: [],
			isHiddenVideo: false,
		},
	})

	const onSubmit: SubmitHandler<OneVideoInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<h4 className={styles.titleVideoForm}>Видеозапись</h4>
			<Container>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneVideoContent}>
							<div className={styles.oneVideoContentLeft}>
								<MainSection />
							</div>
							<div className={styles.oneVideoRight}>
								<SwitchedRadioBtns
									name='isHiddenVideo'
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
