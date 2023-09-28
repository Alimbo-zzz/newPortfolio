import React from 'react';
import cls from './style.module.scss';
import { v4 as setId } from 'uuid';
import telegram_svg from '@icons/telegram.svg';
import github_svg from '@icons/github.svg';
import gmail_svg from '@icons/gmail.svg';
import classNames from 'classnames';

function Socials({ className }) {
	const socials = [
		{ id: setId(), name: 'telegram', icon: telegram_svg, url: 'https://t.me/Alim_bo' },
		{ id: setId(), name: 'github', icon: github_svg, url: 'https://github.com/Alimbo-zzz' },
		{ id: setId(), name: 'gmail', icon: gmail_svg, url: 'mailto:alimbo333@gmail.com' },
	];


	return (<>
		<div className={classNames([className, cls.socials])}>
			{socials.map(el => (
				<a href={el.url} target='_blanck' className={cls.socials__item} key={el.id}>
					<img src={el.icon} data-name={el.name} />
				</a>
			))}
		</div>
	</>);
}

export default Socials;