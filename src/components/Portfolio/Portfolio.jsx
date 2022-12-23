import React from 'react'

import portfolio from '../../data/portfolio'

import styles from './Portfolio.module.scss'

const Portfolio = () => {
	return (
		<div className={styles.portfolio}>
			<ul className={styles.portfolio__list}>
				{portfolio.map(item => (
					<li key={item.id} className={styles.portfolio__item}>
						<a
							href={item.link}
							target='_blank'
							className={styles.portfolio__link}
						>
							<div className={styles.img__wrapper}>
								<div className={styles.animation} />
								<img src={item.image} alt={item.title} className={styles.img} />
							</div>
							<h3 className={styles.portfolio__title}>{item.title}</h3>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Portfolio
