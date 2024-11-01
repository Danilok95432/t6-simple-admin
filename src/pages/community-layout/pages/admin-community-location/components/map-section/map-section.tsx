import { type FC, useState } from 'react'
import { type LocationInputs } from 'src/pages/community-layout/pages/admin-community-location/schema'

import { useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const MapSection: FC = () => {
	const [mapScript, setMapScript] = useState<string | null>(null)
	const { getValues } = useFormContext<LocationInputs>()

	const loadMap = () => {
		if (getValues('mapScript')) {
			setMapScript(getValues('mapScript'))
		}
	}

	return (
		<AdminSection titleText='Карта'>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='mapScript'
				label='Текст скрипта Яндекса'
				margin='0 0 15px 0'
				disabled={!!mapScript}
				height='200px'
				isTextarea
			/>
			<div className={styles.mapControllers}>
				<AdminButton $padding='0 20px' $height='35px' type='button' onClick={loadMap}>
					Сохранить
				</AdminButton>
				{!!mapScript && (
					<AdminButton
						$padding='0 20px'
						$height='35px'
						type='button'
						onClick={() => setMapScript(null)}
					>
						Отменить
					</AdminButton>
				)}
			</div>
			<div className={styles.loadedMap}>
				<iframe src={mapScript ?? ''}></iframe>
			</div>
		</AdminSection>
	)
}
