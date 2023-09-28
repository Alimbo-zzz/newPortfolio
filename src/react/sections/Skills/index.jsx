import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import Slider from './Slider';
import { useGallery } from '@hooks';

import decor_img from '@images/decor-3.png';
import spark_img from '@images/spark.png';
const StackIcons = import.meta.glob('@icons/stack/*.svg', { eager: true });



function Skills(props) {
	const stackArray = useGallery(StackIcons)?.arr;

	return (<>
		<section id='skills' className={cls.skills}>
			<div className={classNames([cls.skills__grid, 'container'])}>
				<h2 className='title'>Навыки</h2>

				<Slider className={cls.skills__slider} />

				<div className={cls.skills__foot}>
					<h3>Основной стек технологий</h3>
					<img src={spark_img} data-image='spark' />
					<div className={cls.skills__stack}>
						{stackArray.map(el => <img src={el} key={el} />)}
					</div>
				</div>
				<img src={decor_img} className={cls.skills__decor} />
			</div>
		</section>
	</>);
}

export default Skills;