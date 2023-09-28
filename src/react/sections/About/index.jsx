import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import cube_svg from '@icons/cube.svg';
import text_decor_img from '@images/decor-5.png';
import frontend_img from '@images/decor-frontend.png';
import backend_img from '@images/decor-backend.png';
import teamwork_img from '@images/decor-teamwork.png';
import figma_img from '@images/decor-figma.png';
import develop_img from '@images/decor-develop.png';


function About(props) {



	return (<>
		<section id='about' className={cls.about}>
			<div className={classNames(['container', cls.about__grid])}>
				<div className={cls.about__decors}>
					<img src={cube_svg} className={cls.about__decor} data-name='cube' />
					<img src={frontend_img} className={cls.about__decor} data-name='frontend' />
					<img src={backend_img} className={cls.about__decor} data-name='backend' />
					<img src={figma_img} className={cls.about__decor} data-name='figma' />
					<img src={develop_img} className={cls.about__decor} data-name='develop' />
					<img src={teamwork_img} className={cls.about__decor} data-name='teamwork' />
				</div>
				<div className={cls.about__content}>
					<img src={text_decor_img} className={cls.about__decor} data-name='text' />
					<h4>Привет, меня зовут</h4>
					<h3>Алим Мамбетов</h3>
					<div className={cls.about__description}>
						<p>Занимаюсь созданием  современных и адаптивных под все устройсва сайтов.  Отличные знания JavaScript, HTML5, CSS3 включая анимации, flexbox, grid.</p>
						<p>3 года опыта коммерческой разработки. <br /> Последние 2 года работаю с библиотекой React.js с использованием  redux, redux - toolkit.Так же есть опыт работы на Vue.js около 1го года и около 1.5 лет работы на фрилансе.</p>
						<p>Есть навыки работы с Figma, как пример можете оценить макет сайта на котором вы сейчас находитесь.</p>
						<p>Присутсвуют навыки работы с Backend разработкой на Node.js, создание API на express, работа с базой данных на MongoDB, создание JWT авторизации и деплой проекта на хостинг с использованием PM2 и Nginx.</p>
						<p>Могу настроить окружение на Vite, Webpack, Gulp под нужную задачу.  <br /> Основной стек технологий на данный момент:  <br />	Vite, React, TypeScript, SCSS, redux - toolkit.</p>
						<p>Немного о себе: <br /> Я веселый, ответственный, стрессоустойчевый, целеустремлённый, честный.</p>
					</div>
				</div>
			</div>
		</section>
	</>);
}

export default About;