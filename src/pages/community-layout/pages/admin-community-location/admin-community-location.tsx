import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { MailSection } from 'src/pages/community-layout/pages/admin-community-location/components/mail-section/mail-section'
import { PhoneSection } from 'src/pages/community-layout/pages/admin-community-location/components/phones-section/phone-section'
import { EmailsSection } from 'src/pages/community-layout/pages/admin-community-location/components/emails-section/emails-section'
import { MapSection } from 'src/pages/community-layout/pages/admin-community-location/components/map-section/map-section'
import {
	type LocationInputs,
	locationSchema,
} from 'src/pages/community-layout/pages/admin-community-location/schema'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const AdminCommunityLocation: FC = () => {
	const methods = useForm<LocationInputs>({
		mode: 'onBlur',
		resolver: yupResolver(locationSchema),
		defaultValues: {
			mailSection: true,
			phoneSection: true,
			emailsSection: true,
		},
	})
	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<LocationInputs> = (data) => {
		console.log(data)
		markAsSent(true)
	}
	return (
		<>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			<AdminContent title='Карта и машруты' link='#'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MapSection />
						<MailSection />
						<PhoneSection />
						<EmailsSection />
						<AdminControllers variant='3' isSent={isSent} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
