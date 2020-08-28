import React, { useState } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = Styled.header`
	position: sticky;
	top: 0;
	z-index: 100;
	background: ${props => props.theme.dark};
	color: #efefef;

	.wrapper {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row;
		max-width: 1200px;
		margin: 0 auto;
	}

	button {
		width: 3rem;
		padding: 0;
		background: transparent;
		border: none;
		outline: none;
		margin-right: 1rem;
		transition: .1s all ease-out;
		display: none;

		&:hover {
			transform: scale(1.05) rotate(5deg);
			transition: .2s all ease-out;
		}

		&:active {
			transform: scale(0.95) rotate(-5deg);
			transition: .2s all ease-out;
		}
	}

	@media (max-width: 800px) {
		button {
			display: block;
		}
	}

	@media (max-width: 400px) {
		button {
			width: 4rem;
		}
	}
`

const LogoSection = Styled.section`
	display: flex;
	align-items: center;
	max-height: 100%;/* Without this the logo was overflowing the header*/

	img {
		width: 3rem;
		height: 3rem;
		padding: .65rem;
	}

	h1 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-right: 1rem;
	}

	@media (min-width: 500px) {
		h1 {
			font-size: 1.5rem;
		}

		img {
			padding: 1rem;
		}
	}
`

const Navigation = Styled.nav`
	ul {
		display: flex;
		flex-flow: row;
		margin: 0;
		padding: 0;
		
		li {
			font-weight: 600;
			padding: .65rem;
			list-style-type: none;
			display: flex;
			align-items: center;
			display: flex;
			justify-content: center;
			flex-flow: column;

			&::after {
				display: block;
				content: '';
				width: 5rem;
				height: 2px;
				margin-top: .3rem;
				background: ${props => props.theme.akcent};
				transform: scaleX(0);
				transition: .15s transform ease-in-out;
			}

			&:hover {
				&::after {
					transform: scaleX(1);
				}

				a {
					text-decoration: none;
				}
			}
		}
	}

	@media (max-width: 800px) {
		transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
		opacity: ${({ open }) => open ? '1' : '0'};
		position: fixed;
		left: 0;
		top: 5rem;
		width: 100vw;
		z-index: -1;
		background: ${props => props.theme.dark};
		transition: .3s all ease-in-out;
		border-bottom: 5px solid ${props => props.theme.akcent};
		padding: 1rem 0;

		ul {
			flex-flow: column;
		}
	}
`

const AppHeader = () => {
	const [open, setOpen] = useState(false);
	const handleToggleMenu = () => setOpen(state => !state)

	return (
			<Header>
				<div className="wrapper">
					<LogoSection>
						<img src="Images/logo.png" alt="Arka"/>
						<h1><Link to="/">Przychodnia Weterynaryjna Arka</Link></h1>
					</LogoSection>
					<button aria-label="Menu Btn" onClick={handleToggleMenu}>
						<img src="Images/svg/menu-icon.svg" alt="Menu"/>
					</button>
					<Navigation open={open}>
						<ul>
							<li><Link to="/" onClick={handleToggleMenu}>Strona Główna</Link></li>
							<li><Link to="/oferta" onClick={handleToggleMenu}>Oferta</Link></li>
							<li><Link to="/galeria" onClick={handleToggleMenu}>Galeria</Link></li>
							<li><Link to="/blog" onClick={handleToggleMenu}>Blog</Link></li>
							<li><Link to="/kontakt" onClick={handleToggleMenu}>Kontakt</Link></li>
						</ul>
					</Navigation>
				</div>
			</Header>
	)
}

export default AppHeader