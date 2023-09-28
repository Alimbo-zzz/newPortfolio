import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { Logo, Socials, Navigation } from '@components';

import arrow_top_svg from '@icons/arrow-top.svg';


function Footer(props) {

	return (<>
		<footer className={cls.footer}>
			<div className={classNames(['container', cls.footer__grid])}>
				<Logo className={cls.footer__logo} />
				<Navigation className={cls.footer__nav} type='footer' />
				<Socials className={cls.footer__socials} type='footer' />

				<div className={cls.footer__created}>ⓒ 2023  ALIMBO Inc.</div>
				<blockquote className={cls.footer__quote}>
					<p>Люди подобны металлу, некоторые металлы очень дороги, а другие не имеют никакой ценности. [62]</p>
					<cite>© Пророк Мухаммад ﷺ</cite>
				</blockquote>

				<a href="#top" className={cls.footer__arrow}>
					<img src={arrow_top_svg} />
				</a>
			</div>
		</footer>
	</>);
}

export default Footer;