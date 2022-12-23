import React from 'react'
import skillset from '../../data/skillset'

import styles from './Skillset.module.scss'

const Skillset = () => {
	return (
		<div className={styles.skillset}>
			<ul className={styles.skillset__list}>
				{skillset.map(item => (
					<li key={item.id} className={styles.skillset__item}>
						<img
							className={styles.skillset__img}
							src={item.image}
							width={item.width}
							alt='react'
						/>
						<h3 className={styles.skillset__title}>{item.title}</h3>
					</li>
				))}
				<div className={styles.emptyBlock}>Empty div</div>
			</ul>
		</div>
	)
}

export default Skillset
