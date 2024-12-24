import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'

export const DescSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.descSection}>
			<div className={styles.descBlock}>
				<span>Краткое описание (хранится в базе, предназначено для Вас)</span>
				<p>
					Здесь какой-то короткий текст, который написал подавший заявку редактор с целью объяснить,
					зачем на главном сайте нужна эта новость или видеозапись.
				</p>
			</div>
			<div className={styles.descBlock}>
				<span>Название и ссылка</span>
				<a href='#'>Встреча с представителями Монгольского государственного университета</a>
			</div>
			<div className={styles.descBlock}>
				<span>Тип заявки</span>
				<p>видеозапись</p>
			</div>
			<div className={styles.descBlock}>
				<span>Источник</span>
				<a href='#'>Мастерская Городецкой керамики (объект кластера)</a>
			</div>
		</AdminSection>
	)
}
