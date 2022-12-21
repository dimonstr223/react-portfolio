import React from 'react'

import avatar from '../assets/img/me.jpg'
import telegram from '../assets/img/icons/telegram.svg'
import phone from '../assets/img/icons/phone.svg'
import email from '../assets/img/icons/email.svg'

const Info = () => {
	return (
		<div className='info'>
			<div className='info__top'>
				<div className='avatar__wrapper'>
					<img src={avatar} alt='Avatar' />
				</div>
				<h1 className='name'>Dmitry Mikolutsky</h1>
				<div>
					<button className='about__button'>About me</button>
				</div>
			</div>
			<div className='info__bottom'>
				<h2 className='title'>Frontend - developer</h2>
				<div className='contacts'>
					<ul className='contacts__list'>
						<li className='contacts__item'>
							<img src={telegram} width={30} alt='Telegram' />
						</li>
						<li className='contacts__item'>
							<img src={phone} width={30} alt='Phone' />
						</li>
						<li className='contacts__item'>
							<img src={email} width={30} alt='Email' />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Info
