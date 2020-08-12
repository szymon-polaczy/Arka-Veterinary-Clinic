import React from 'react'
import Styled from 'styled-components'
import AppHeader from './Components/AppHeader'
import 'normalize.css';

const ApplicationWrapper = Styled.div`
  	font-family: 'Montserrat', sans-serif;
`

function App() {
	return (
		<ApplicationWrapper>
			<AppHeader/>
		</ApplicationWrapper>
	)
}

export default App
