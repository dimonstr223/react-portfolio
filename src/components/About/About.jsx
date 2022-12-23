import React from 'react'

import styles from './About.module.scss'

const About = ({ isAboutOpened }) => {
	return (
		<div className={isAboutOpened ? styles['about__active'] : styles['about']}>
			<p className={styles.about__text}>
				I develop both static web-pages and dynamic web-applications. I am an
				independent and teacheble person. I constantly learn something new and
				enjoy my progress.
			</p>
		</div>
	)
}

export default About
