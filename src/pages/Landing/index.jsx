import React from 'react';
import cls from './style.module.scss';
import { Intro, Header, About, Footer, Feedback, Skills, Portfolio } from '@sections';

const Landing = (props) => {

	return (<>
		<Header />
		<Intro />
		<About />
		<Skills />
		<div className="container"><hr /></div>
		<Portfolio />
		<Feedback />
		<Footer />
	</>);
}

export default Landing;