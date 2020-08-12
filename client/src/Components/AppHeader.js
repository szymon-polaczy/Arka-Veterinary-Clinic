import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Header = Styled.header`
	box-shadow: 0 0 .65rem #999;

	.wrapper {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row;
		max-width: 1200px;
		margin: 0 auto;
	}
`

const LogoSection = Styled.section`
	display: flex;
	align-items: center;
	height: 100%; /* Without this the logo was overflowing the header*/

	img {
		max-height: 100%;
		box-sizing: border-box;
		padding: 1rem;
	}

	h1 {
		font-size: 1.5rem;
	}
`

const Navigation = Styled.nav`
	ul {
		display: flex;
		flex-flow: row;
		margin: 0;
		padding: 0;
		
		li {
			padding: .65rem;
			list-style-type: none;

			a {
				color: inherit;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`

const AppHeader = () => {
	return (
		<Router>
			<Header>
				<div className="wrapper">
					<LogoSection>
						<img src="Images/logo.png" alt="Arka"/>
						<h1>Przychodnia Weterynaryjna Arka</h1>
					</LogoSection>
						<Navigation>
							<ul>
								<li><Link to="/">Strona Główna</Link></li>
								<li><Link to="/oferta">Oferta</Link></li>
								<li><Link to="/kontakt">Kontakt</Link></li>
								<li><Link to="/galeria">Galeria</Link></li>
								<li><Link to="/blog">Blog</Link></li>
								<li><Link to="/łapa"><i>Łapa</i></Link></li>
							</ul>
						</Navigation>
				</div>
			</Header>

			<Switch>
				<Route path="/łapa">{/* <Łapa/> */}</Route>
				<Route path="/blog">{/* <Blog/> */}</Route>
				<Route path="/galeria">{/* <Galeria/> */}</Route>
				<Route path="/kontakt">{/* <Kontakt/> */}</Route>
				<Route path="/oferta">{/* <Oferta/> */}</Route>
				<Route path="/">{/* <Strona Główna/> */}</Route>
			</Switch>
		</Router>
	)
}

export default AppHeader