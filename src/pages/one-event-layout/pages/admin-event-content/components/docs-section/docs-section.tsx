import { type FC } from 'react'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { GridRow } from 'src/components/grid-row/grid-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const DocsSection: FC = () => {
	return (
		<section className={styles.docsSection}>
			<ul className={styles.docsList}>
				<li>
					<h6>Документ 1</h6>
					<GridRow
						$alignItems='center'
						$template='auto/repeat(auto-fit, minmax(250px, 1fr))'
						$gap='10px'
					>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='docName1'
							placeholder='название, например, Регламент соревнований'
							margin='0'
						/>
						<ReactDropzone
							name='docFile1'
							variant='text'
							customUploadBtn={
								<button className={styles.docUploadBtn} type='button'>
									<span>Загрузить файл с компьютера</span> в формате PDF
								</button>
							}
							margin='0'
							accept={{
								'application/pdf': ['.pdf'],
							}}
						/>
					</GridRow>
				</li>
				<li>
					<h6>Документ 2</h6>
					<GridRow
						$alignItems='center'
						$template='auto/repeat(auto-fit, minmax(250px, 1fr))'
						$gap='10px'
					>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='docName2'
							placeholder='название, например, Условия участия'
							margin='0'
						/>
						<ReactDropzone
							name='docFile2'
							variant='text'
							customUploadBtn={
								<button className={styles.docUploadBtn} type='button'>
									<span>Загрузить файл с компьютера</span> в формате PDF
								</button>
							}
							margin='0'
							accept={{
								'application/pdf': ['.pdf'],
							}}
						/>
					</GridRow>
				</li>
				<li>
					<h6>Документ 3</h6>
					<GridRow
						$alignItems='center'
						$template='auto/repeat(auto-fit, minmax(250px, 1fr))'
						$gap='10px'
					>
						<ControlledInput className={adminStyles.adminMainInput} name='docName3' margin='0' />
						<ReactDropzone
							name='docFile3'
							variant='text'
							customUploadBtn={
								<button className={styles.docUploadBtn} type='button'>
									<span>Загрузить файл с компьютера</span> в формате PDF
								</button>
							}
							margin='0'
							accept={{
								'application/pdf': ['.pdf'],
							}}
						/>
					</GridRow>
				</li>
			</ul>
		</section>
	)
}
