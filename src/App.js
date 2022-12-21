import './scss/App.scss'

import Info from './components/Info'
import Skillset from './components/Skillset'
import Portfolio from './components/Portfolio'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Info />
				<Skillset />
				<Portfolio />
			</div>
		</div>
	)
}

export default App
