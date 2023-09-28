import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { Navigation, Socials, Logo } from '@components';

const Header = (props) => {
	const [navActive, setNavActive] = useState(false);
	const [styledBg, setStyledBg] = useState(false);

	const closeMenu = () => setNavActive(false);


	const checkScroll = (e) => {
		let scrollTop = window.pageYOffset;
		(scrollTop > 60) ? setStyledBg(true) : setStyledBg(false);
	};

	useEffect(() => {
		document.addEventListener('click', closeMenu);
		window.addEventListener('scroll', checkScroll);

		return (e) => {
			window.removeEventListener('scroll', checkScroll);
			document.removeEventListener('click', closeMenu);
		}
	}, [])


	return (<>
		<header className={cls.header} data-bg={styledBg}>
			<div className={classNames(['container', cls.header__grid])} onClick={e => e.stopPropagation()}>
				<Logo />
				<Navigation type='header' active={navActive} setActive={setNavActive} />
				<Socials />
				<div className={cls.header__hamburger} onClick={() => setNavActive(prev => !prev)}><span data-active={navActive} /></div>
			</div>
		</header>
	</>);
}

export default Header;