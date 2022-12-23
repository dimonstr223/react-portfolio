import './scss/App.scss'

import Info from './components/Info/Info'
import Skillset from './components/Skillset/Skillset'
import Portfolio from './components/Portfolio/Portfolio'

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
