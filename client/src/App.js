import React from 'react'
import Styled from 'styled-components'
import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import OfferPage from './Pages/OfferPage'

import 'normalize.css';

const ApplicationWrapper = Styled.div`
	font-family: 'Montserrat', sans-serif;
		
	a {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`

function App() {
	return (
		<ApplicationWrapper>
			<Router>
				<AppHeader/>

				<Switch>
					<Route path="/blog">{/* <Blog/> */}</Route>
					<Route path="/galeria">{/* <Galeria/> */}</Route>
					<Route path="/kontakt">{/* <Kontakt/> */}</Route>
					<Route path="/oferta"><OfferPage/></Route>
					<Route path="/"><HomePage/></Route>
				</Switch>
				
				{/*<AppFooter/>*/}
			</Router>
		</ApplicationWrapper>
	)
}

export default App
