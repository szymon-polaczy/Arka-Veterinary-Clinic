import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import HomePage from './Pages/HomePage'
import OfferPage from './Pages/OfferPage'
import ContactPage from './Pages/ContactPage'
import Gallery from './Pages/Gallery'
import Blog from './Pages/Blog'
import BlogArticle from './Pages/BlogArticle'

import 'normalize.css';

const Main = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: ${props => props.theme.dark};
	color: ${props => props.theme.light};
	border-bottom: 10px solid ${props => props.theme.akcent};
`;

function App() {
	return (
		<Router>
			<AppHeader/>

			<Main>
				<Switch>
					<Route path='/blog-:id' render={routerProps => <BlogArticle id={routerProps.match.params.id}/>}/>
					<Route path="/blog" component={Blog}/>
					<Route path="/galeria" component={Gallery}/>
					<Route path="/kontakt" component={ContactPage}/>
					<Route path="/oferta" component={OfferPage}/>
					<Route path="/" component={HomePage}/>
				</Switch>
			</Main>
						
			<AppFooter/>
		</Router>
	)
}

export default App
