import React from 'react'
import Styled from 'styled-components'
import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import OfferPage from './Pages/OfferPage'
import ContactPage from './Pages/ContactPage'
import Gallery from './Pages/Gallery'
import Blog from './Pages/Blog'
import BlogArticle from './Pages/BlogArticle'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

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

const renderBlogArticle = (routerProps) => {
	return <BlogArticle id={routerProps.match.params.id}/>
}

function App() {
	const client = new ApolloClient({
		uri: 'https://api-eu-central-1.graphcms.com/v2/ckdyr4fjy1qq601w8hyhw0msj/master'
	})

	return (
		<ApolloProvider client={client}>
			<ApplicationWrapper>
				<Router>
					<AppHeader/>

					<Main>
						<Switch>
							<Route path='/blog/:id' render={routerProps => renderBlogArticle(routerProps)}/>
							<Route path="/blog"><Blog/></Route>
							<Route path="/galeria"><Gallery/></Route>
							<Route path="/kontakt"><ContactPage/></Route>
							<Route path="/oferta"><OfferPage/></Route>
							<Route path="/"><HomePage/></Route>
						</Switch>
					</Main>
					
					<AppFooter/>
				</Router>
			</ApplicationWrapper>
		</ApolloProvider>
	)
}

export default App
