import React from 'react';
import cls from './style.module.scss';
import { v4 as setId } from 'uuid';
import classNames from 'classnames';


const Navigation = ({ className = '', type = 'base', active, setActive }) => {
	const navItems = [
		{ id: setId(), value: "Обо мне", link: "#about" },
		{ id: setId(), value: "Навыки", link: "#skills" },
		{ id: setId(), value: "Портфолио", link: "#portfolio" },
		{ id: setId(), value: "Связь", link: "#feedback" },
	];

	return (<>
		<nav data-active={active} className={classNames([cls.nav, className])} data-type={type}>
			{navItems.map(el => (
				<a href={el.link} key={el.id} onClick={() => setActive(false)} className={cls.nav__item}>{el.value}</a>
			))}
		</nav>
	</>);
}

export default Navigation;