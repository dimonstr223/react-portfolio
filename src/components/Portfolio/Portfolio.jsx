import React from 'react'

import portfolio from '../../data/portfolio'

import githubIcon from '../../assets/img/icons/github.svg'

import styles from './Portfolio.module.scss'

const Portfolio = () => {
	return (
		<div className={styles.portfolio}>
			<ul className={styles.portfolio__list}>
				{portfolio.map(item => (
					<li key={item.id} className={styles.portfolio__item}>
						<a
							href={item.projectLink}
							target='_blank'
							className={styles.portfolio__link}
						>
							<div className={styles.img__wrapper}>
								<div className={styles.animation} />
								<img src={item.image} alt={item.title} className={styles.img} />
							</div>
							<div className={styles.title__wrapper}>
								<h3 className={styles.portfolio__title}>{item.title}</h3>
								<a
									className={styles.title__link}
									target='_blank'
									href={item.repoLink}
								>
									<img src={githubIcon} alt='GitHub' />
								</a>
							</div>
						</a>
					</li>
				))}
				<div className={styles.emptyBlock}>empty</div>
			</ul>
		</div>
	)
}

export default Portfolio
