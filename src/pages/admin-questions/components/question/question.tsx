import { Link } from 'react-router-dom'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { QuestionInputs, QuestionSchema } from './schema'

import { Container } from 'src/UI/Container/Container'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { MainSection } from './components/main-section/MainSection'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const Question = () => {
	const methods = useForm<QuestionInputs>({
		mode: 'onBlur',
		resolver: yupResolver(QuestionSchema),
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<QuestionInputs> = async (data) => {
		console.log(data)
	}

	return (
		<AdminContent $backgroundColor='#ffffff' $padding='30px 0' $height='609px'>
			<div className={styles.oneQuestionPage}>
				<Link to={`/${AdminRoute.AdminFrequentQuestions}`} className={adminStyles.adminReturnLink}>
					Возврат к списку партнеров
				</Link>

				<h3>Вопрос</h3>

				<Container $padding='0 0 135px 0' $paddingMobile='0 0 40px 0'>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
							<div className={styles.oneQuestionFormContent}>
								<MainSection />
								<SwitchedRadioBtns
									name='hidden'
									label='Спрятать'
									$variant='switcher'
									className={styles.oneQuestionSwitchBtns}
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

							<AdminControllers
								variant='4'
								outLink={`/${AdminRoute.AdminFrequentQuestions}`}
								isSent={isSent}
							/>
						</form>
					</FormProvider>
				</Container>

				<Link to={`/${AdminRoute.AdminFrequentQuestions}`} className={adminStyles.adminReturnLink}>
					Возврат к списку партнеров
				</Link>
			</div>
		</AdminContent>
	)
}
