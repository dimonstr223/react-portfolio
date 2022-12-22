import React from 'react'

import portfolio from '../data/portfolio'
import AnimationBlock from '../components/AnimationBlock'

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<ul className='portfolio__list'>
				{portfolio.map(item => (
					<li key={item.id} className='portfolio__item'>
						<a href='#' className='portfolio__link'>
							<div className='img__wrapper'>
								<AnimationBlock />
								<img
									src={item.image}
									alt={item.title}
									// width={item.width}
									className='img'
								/>
							</div>
							<h3 className='portfolio__title'>{item.title}</h3>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Portfolio
