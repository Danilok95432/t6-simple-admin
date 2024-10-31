import { type FC } from 'react'

import cn from 'classnames'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import communityDocStyles from '../../index.module.scss'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

export const CharterSection: FC = () => {
	return (
		<AdminSection titleText='Устав организации'>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='charterName'
				label='Название документа'
				placeholder='Название'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, communityDocStyles.communityDocTextarea)}
				name='charterDescription'
				label='Короткое описание'
				placeholder='Поле ввода текста'
				margin='0 0 15px 0'
				isTextarea
			/>
			<ControlledMaskedInput
				name='charterVersion'
				label='Номер версии'
				mask={Number}
				placeholder='Номер версии'
			/>
			<ReactDropzone
				name='charterPdf'
				variant='text'
				label='Загрузить PDF'
				uploadBtnText='Загрузить документ в формате PDF'
				margin='0 0 20px 0'
				accept={{
					'application/pdf': ['.pdf'],
				}}
			/>
			<ReactDropzone
				name='charterDocx'
				variant='text'
				label='Загрузить DOCX'
				uploadBtnText='Загрузить документ в формате DOCX'
				accept={{
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
				}}
			/>
		</AdminSection>
	)
}
