import React, { useState } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = Styled.header`
	position: sticky;
	top: 0;
	z-index: 100;
	background: #1b1b1b;
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
	height: 100%; /* Without this the logo was overflowing the header*/

	img {
		max-height: 100%;
		box-sizing: border-box;
		padding: 1rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-right: 1rem;
	}

	@media (max-width: 500px) {
		h1 {
			font-size: 1.3rem;
		}
		
		img {
			max-height: 80%;
			padding: .65rem;
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
				background: #548493;
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
		background: #1b1b1b;
		transition: .3s all ease-in-out;
		border-bottom: 5px solid #548493;
		padding: 1rem 0;

		ul {
			flex-flow: column;
		}
	}
`

const AppHeader = () => {
	const [open, setOpen] = useState(false);

	return (
			<Header>
				<div className="wrapper">
					<LogoSection>
						<img src="Images/logo.png" alt="Arka"/>
						<h1><Link to="/">Przychodnia Weterynaryjna Arka</Link></h1>
					</LogoSection>
					<button aria-label="Menu Btn" onClick={() => setOpen(!open)}>
						<img src="Images/svg/menu-icon.svg" alt="Menu"/>
					</button>
					<Navigation open={open}>
						<ul>
							<li><Link to="/" onClick={() => setOpen(!open)}>Strona Główna</Link></li>
							<li><Link to="/oferta" onClick={() => setOpen(!open)}>Oferta</Link></li>
							<li><Link to="/galeria" onClick={() => setOpen(!open)}>Galeria</Link></li>
							<li><Link to="/blog" onClick={() => setOpen(!open)}>Blog</Link></li>
							<li><Link to="/kontakt">Kontakt</Link></li>
						</ul>
					</Navigation>
				</div>
			</Header>
	)
}

export default AppHeader