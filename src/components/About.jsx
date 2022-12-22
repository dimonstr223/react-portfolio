import React from 'react'

const About = ({ isAboutOpened }) => {
	return (
		<div className={isAboutOpened ? 'about__active' : 'about'}>
			<p className='about__text'>
				I develop both static web-pages and dynamic web-applications. I am an
				independent and teacheble person. I constantly learn something new and
				enjoy my progress.
			</p>
		</div>
	)
}

export default About
