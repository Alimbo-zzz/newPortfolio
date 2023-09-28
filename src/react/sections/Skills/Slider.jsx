import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGallery } from '@hooks';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

const SkillIcons = import.meta.glob('@icons/skills/*.svg', { eager: true });


function Slider({ className }) {
	const skillsArray = useGallery(SkillIcons)?.arr;

	const SwiperData = {
		initialSlide: 4,
		modules: [Pagination, Autoplay],
		// loop: true,
		pagination: { clickable: true },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},


		breakpoints: {
			0: {
				spaceBetween: 0,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			480: {
				spaceBetween: 10,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1024: {
				spaceBetween: 10,
				slidesPerView: 4,
				slidesPerGroup: 2,
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 4,
				slidesPerGroup: 2,
			}
		}
	}


	const setName = e => e.split('/').pop().slice(0, -4).replace('_', ' ').split('-')[0];

	return (<>
		<div className={classNames([className, 'skills-slider'])}>
			<Swiper {...SwiperData}>
				{skillsArray.map((el, i) => (
					<SwiperSlide key={i}>
						<div className='skills-slider__item'>
							<img src={el} />
							<h3>{setName(el)}</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</>);
}

export default Slider;