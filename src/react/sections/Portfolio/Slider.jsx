import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Item from './Item';


import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';


function Slider({ data }) {

	const SwiperData = {
		modules: [Pagination],
		pagination: { clickable: true },
		centeredSlides: true,
		slidesPerGroup: 1,
		spaceBetween: 30,
		slidesPerView: 1.2,

		breakpoints: {
			0: {
				spaceBetween: 20,
				slidesPerView: 1.2,
			},
			480: {
				spaceBetween: 30,
				slidesPerView: 1.4,
			},
		}
	}

	return (<>
		<div className='portfolio-slider'>
			<Swiper {...SwiperData}>
				{data.map(el => (
					<SwiperSlide key={el.id}>
						<Item data={el} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</>);
}

export default Slider;