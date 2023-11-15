import React from 'react';
import cls from './style.module.scss';

import diamonds_img from '@images/decor_10.png';
import rounds_img from '@images/decor_8.png';
import circle_img from '@images/decor_9.png';
import avatar_img from '@images/avatar.png';
import rhombs_img from '@images/decor-7.png';
import comb_img from '@images/decor-6.png';
import wave_img from '@images/decor_11.png';
import classNames from 'classnames';


const Intro = (props) => {

	return (<>
		<section id='intro' className={cls.intro}>
			<div className={classNames(['container', cls.intro__grid])}>

				<div className={cls.intro__title}>
					<h4>Личный сайт</h4>
					<h1>Fullstack</h1>
					<h3>Разработчика</h3>
				</div>

				<img src={avatar_img} className={cls.intro__avatar} />

				<div className={cls.intro__decors}>
					<img src={diamonds_img} data-name='diamonds' />
					<img src={rounds_img} data-name='rounds' />
					<img src={circle_img} data-name='circle' />
					<img src={rhombs_img} data-name='rhombs' />
					<img src={comb_img} data-name='comb' />
				</div>
			</div>

			<img src={wave_img} className={cls.intro__wave} />
		</section>
	</>);
}

export default Intro;