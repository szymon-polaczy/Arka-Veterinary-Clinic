import React from 'react'
import Styled from 'styled-components'
import loadable from '@loadable/component'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'

import 'normalize.css';

const LoadableHome = loadable(() => import('./Pages/HomePage'))
const LoadableOffer = loadable(() => import('./Pages/OfferPage'))
const LoadableContact = loadable(() => import('./Pages/ContactPage'))
const LoadableGallery = loadable(() => import('./Pages/Gallery'))
const LoadableBlog = loadable(() => import('./Pages/Blog'))
const LoadableBlogArticle = loadable(() => import('./Pages/BlogArticle'))

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
					<Route path='/blog-:id' render={routerProps => <LoadableBlogArticle id={routerProps.match.params.id}/>}/>
					<Route path="/blog" component={LoadableBlog}/>
					<Route path="/galeria" component={LoadableGallery}/>
					<Route path="/kontakt" component={LoadableContact}/>
					<Route path="/oferta" component={LoadableOffer}/>
					<Route path="/" component={LoadableHome}/>
				</Switch>
			</Main>
						
			<AppFooter/>
		</Router>
	)
}

export default App
