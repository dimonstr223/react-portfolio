import React from 'react'

import avatar from '../../assets/img/me.jpg'
import telegram from '../../assets/img/icons/telegram.svg'
import phone from '../../assets/img/icons/phone.svg'
import email from '../../assets/img/icons/email.svg'
import About from '../About/About'

import styles from './Info.module.scss'

const Info = () => {
	const [isAboutOpened, setIsAboutOpened] = React.useState(false)

	return (
		<div className={styles.info}>
			<div className={styles.info__top}>
				<div className={styles.avatar__wrapper}>
					<img src={avatar} alt='Avatar' />
				</div>
				<div className={styles.wrapper}>
					<h1 className={styles.name}>Dmitry Mikolutsky</h1>
					<div
						className={styles.about__wrapper}
						onMouseEnter={() => setIsAboutOpened(true)}
						onMouseLeave={() => setIsAboutOpened(false)}
						style={{ position: 'relative' }}
					>
						<button
							className={
								isAboutOpened
									? styles['about__button_active']
									: styles['about__button']
							}
						>
							About me
						</button>
						<About isAboutOpened={isAboutOpened} />
					</div>
				</div>
			</div>
			<div className={styles.info__bottom}>
				<h2 className={styles.title}>Frontend - developer</h2>
				<div className={styles.contacts}>
					<ul className={styles.contacts__list}>
						<li className={styles.contacts__item}>
							<a
								href='https://t.me/sqoothq'
								target='_blank'
								className={styles.contacts__link}
							>
								<img src={telegram} width={30} alt='Telegram' />
							</a>
						</li>
						<li className={styles.contacts__item}>
							<a href='tel:375295669251' className={styles.contacts__link}>
								<img src={phone} width={30} alt='Phone' />
							</a>
						</li>
						<li className={styles.contacts__item}>
							<a
								href='mailto:dimstukmikolu@gmail.com'
								className={styles.contacts__link}
							>
								<img src={email} width={30} alt='Email' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Info
