import React from 'react'
import skillset from '../../data/skillset'

const Skillset = () => {
	return (
		<div className='skillset'>
			<ul className='skillset__list'>
				{skillset.map(item => (
					<li key={item.id} className='skillset__item'>
						<img
							className='skillset__img'
							src={item.image}
							width={item.width}
							alt='react'
						/>
						<h3 className='skillset__title'>{item.title}</h3>
					</li>
				))}
				<div className='emptyBlock'>Empty div</div>
			</ul>
		</div>
	)
}

export default Skillset
