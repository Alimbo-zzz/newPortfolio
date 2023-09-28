import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@hooks';
import { v4 as setId } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import Item from './Item';
import Slider from './Slider';


import decor_bg_img from '@images/decor-2.png';
const PortfolioImages = import.meta.glob('@images/portfolio/*.png', { eager: true });



function Portfolio(props) {
	const portfolioObj = useGallery(PortfolioImages)?.obj;
	const [portfolioArr, setPortfolioArr] = useState([]);
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

	useEffect(() => {
		if (!portfolioObj) return;

		setPortfolioArr([
			{ id: setId(), image: portfolioObj["hedgehog-games.png"], name: 'HedgeHog Games', url: 'https://alimbo-zzz.github.io/HedgehogGamesReact/' },
			{ id: setId(), image: portfolioObj["pandemonium.png"], name: 'Pandemonium', url: 'https://alimbo-zzz.github.io/PandemoniumNew/dist/' },
			{ id: setId(), image: portfolioObj["hedgehog.png"], name: 'Hedgehog React', url: 'https://alimbo-zzz.github.io/HedgehogReact/' },
			{ id: setId(), image: portfolioObj["Restoraunt.png"], name: 'Restoraunt', url: 'https://alimbo-zzz.github.io/Restoraunt//index.html' },
			{ id: setId(), image: portfolioObj["hamburgers.png"], name: 'Burgers', url: 'https://alimbo-zzz.github.io/burgers/index.html' },
			{ id: setId(), image: portfolioObj["art-place.png"], name: 'Art place', url: 'https://alimbo-zzz.github.io/sinica/index.html' },
			{ id: setId(), image: portfolioObj["first-portfolio.png"], name: 'First portfolio', url: 'https://alimbo-zzz.github.io/portfolio/index.html' },
			{ id: setId(), image: portfolioObj["funiro.png"], name: 'Funiro', url: 'https://alimbo-zzz.github.io/Funiro/index.html' },
		])
	}, [portfolioObj])



	return (<>
		<section id='portfolio' className={cls.portfolio}>
			<div className={classNames(['container', cls.portfolio__cont])}>
				<img src={decor_bg_img} className={cls.portfolio__decor} />
				<h2 className='title'>Портфолио</h2>
				{
					isTablet
						? (<Slider data={portfolioArr} />)
						: (
							<div className={cls.portfolio__grid}>
								{portfolioArr.map(el => <Item data={el} key={el.id} />)}
							</div>
						)
				}
			</div>
		</section>
	</>);
}

export default Portfolio;