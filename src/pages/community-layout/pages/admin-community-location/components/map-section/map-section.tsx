import { type FC, useState } from 'react'
import { type LocationInputs } from 'src/pages/community-layout/pages/admin-community-location/schema'

import { useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminMap } from 'src/components/admin-map/admin-map'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

import styles from './index.module.scss'

export const MapSection: FC = () => {
	const [mapCoordinates, setMapCoordinates] = useState<[number, number] | null>(null)
	const { getValues } = useFormContext<LocationInputs>()

	const loadMap = () => {
		const coordValues = getValues('mapCoord')
		if (coordValues) {
			const coordArr = coordValues.split(',')
			if (coordArr.length !== 2) return
			setMapCoordinates([+coordArr[0], +coordArr[1]])
		}
	}

	return (
		<AdminSection titleText='Карта'>
			<ControlledMaskedInput
				label='Координаты (широта, долгота в градусах, минутах и секундах)*'
				mask={/^[^a-zA-Zа-яА-Я]*$/}
				name='mapCoord'
				$margin='0 0 15px 0'
				placeholder='Координаты'
				disabled={!!mapCoordinates}
			/>
			<div className={styles.mapControllers}>
				<AdminButton $padding='0 20px' $height='35px' type='button' onClick={loadMap}>
					Сохранить
				</AdminButton>
				{!!mapCoordinates && (
					<AdminButton
						$padding='0 20px'
						$height='35px'
						type='button'
						onClick={() => setMapCoordinates(null)}
					>
						Отменить
					</AdminButton>
				)}
			</div>
			<div className={styles.loadedMap}>
				<AdminMap points={mapCoordinates} zoom={17} />
			</div>
		</AdminSection>
	)
}
