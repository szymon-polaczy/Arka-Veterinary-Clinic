import React from 'react'
import Styled from 'styled-components'
import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import OfferPage from './Pages/OfferPage'
import ContactPage from './Pages/ContactPage'

import 'normalize.css';

const ApplicationWrapper = Styled.div`
	font-family: 'Montserrat', sans-serif;
		
	a {
		color: inherit;
		text-decoration: none;
	}
`

const Main = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: #1b1b1b;
	color: #fff;

	border-bottom: 10px solid #548493;
`;

function App() {
	return (
		<ApplicationWrapper>
			<Router>
				<AppHeader/>

				<Main>
					<Switch>
						<Route path="/blog">{/* <Blog/> */}</Route>
						<Route path="/galeria">{/* <Galeria/> */}</Route>
						<Route path="/kontakt"><ContactPage/></Route>
						<Route path="/oferta"><OfferPage/></Route>
						<Route path="/"><HomePage/></Route>
					</Switch>
				</Main>
				
				<AppFooter/>
			</Router>
		</ApplicationWrapper>
	)
}

export default App
