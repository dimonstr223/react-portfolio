import './scss/App.scss'

import Info from './components/Info/Info'
import Skillset from './components/Skillset/Skillset'
import Portfolio from './components/Portfolio/Portfolio'
import TestAccount from './components/TestAccount/TestAccount'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Info />
				<Skillset />
				<TestAccount />
				<Portfolio />
			</div>
		</div>
	)
}

export default App
