import React from 'react';
import cls from './style.module.scss';
import decor_item_img from '@images/decor-4.png';


const Item = ({ data }) => {
	return (<>
		<div className={cls.portfolio__item}>
			<img src={data.image} data-name='item-preview' />
			<img src={decor_item_img} data-name='item-decor' />
			<h4 data-name='item-name'>{data.name}</h4>
			<a href={data.url} target='_blanck' data-name='item-link'>Посетить сайт</a>
		</div>
	</>)
}

export default Item;