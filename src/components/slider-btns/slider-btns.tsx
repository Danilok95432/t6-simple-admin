import React, { type FC, type RefObject } from 'react'

import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'

import styles from './index.module.scss'
import { type SwiperRef } from 'swiper/react'

type SliderBtnsProps = {
	topPosition?: string
	leftBtnPosition?: string
	rightBtnPosition?: string
	swiperRef: RefObject<SwiperRef>
}

export const SliderBtns: FC<SliderBtnsProps> = ({ topPosition, swiperRef }) => {
	const handlePrev = () => {
		swiperRef.current?.swiper.slidePrev()
	}

	const handleNext = () => {
		swiperRef.current?.swiper.slideNext()
	}
	return (
		<div className={styles.sliderBtns} style={{ top: topPosition ?? 0 }}>
			<button className={styles.slideBtnPrev} type='button' onClick={handlePrev}>
				<SlidePrevSvg />
			</button>
			<button className={styles.slideBtnNext} type='button' onClick={handleNext}>
				<SlideNextSvg />
			</button>
		</div>
	)
}
