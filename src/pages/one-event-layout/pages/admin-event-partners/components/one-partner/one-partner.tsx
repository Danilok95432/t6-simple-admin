import { type OneEventPartnerInputs, oneEventPartnerSchema } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { MainSection } from './components/main-section/main-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import {
	useGetEventPartnerInfoQuery,
	useSaveEventPartnerInfoMutation,
} from 'src/store/events/events.api'
import { useEffect } from 'react'
import { transformToFormData } from 'src/helpers/utils'

export const OnePartner = () => {
	const { id = '', partnerId = '' } = useParams()
	const { data: partnerEventInfoData } = useGetEventPartnerInfoQuery(partnerId)
	const [savePartnerInfo] = useSaveEventPartnerInfoMutation()

	const methods = useForm<OneEventPartnerInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneEventPartnerSchema),
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<OneEventPartnerInputs> = async (data) => {
		console.log(data)
		const serverData = {
			id_partner: data.partners_list,
		}
		const serverFormData = transformToFormData(serverData)
		serverFormData.append('id', partnerId)

		data.partner_types?.forEach((type, index) => {
			if (type.checked) serverFormData.append(`partner_types[${index}]`, type.value)
		})
		const res = await savePartnerInfo(serverFormData)
		if (res) markAsSent(true)
	}

	useEffect(() => {
		if (partnerEventInfoData) {
			methods.reset({ ...partnerEventInfoData })
		}
	}, [partnerEventInfoData])

	return (
		<div className={styles.onePartnerPage}>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventPartners}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку партнеров
			</Link>
			<h3>Партнер</h3>
			<Container
				$padding='0 0 40px 0'
				$paddingMobile='0 0 40px 0'
				$margin='0'
				className={styles.containerEventPartners}
			>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection
							partnerTypes={partnerEventInfoData?.partner_types}
							partnersList={partnerEventInfoData?.partners_list}
						/>
						<AdminButton
							as='button'
							type='submit'
							$height='40px'
							$variant={isSent ? 'sent' : 'primary'}
						>
							Добавить партера
						</AdminButton>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventPartners}/${id}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку партнеров
			</Link>
		</div>
	)
}
