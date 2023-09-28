import React from 'react';
import cls from './style.module.scss';
import logo_img from '@images/logo.png';

function Logo(props) {

	return (<>
		<a href='' className={cls.logo}>
			<img src={logo_img} />
		</a>
	</>);
}

export default Logo;