import React from 'react'
import Styled from 'styled-components'

import WelcomeSection from './HomePageComponents/WelcomeSection'
import Intro from './HomePageComponents/Intro'
import ImageSection from './HomePageComponents/ImageSection'
import AboutUsSection from './HomePageComponents/AboutUsSection'
import PeopleSection from './HomePageComponents/PeopleSection'

const HomePageContainer = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: #1b1b1b;
	color: #fff;

	border-bottom: 10px solid #548493;
`;

const PeopleSction = Styled.section`
	padding-bottom: 5rem;
	border-bottom: .65rem solid #548493;

	.wrapper {
		max-width: 1200px;
		margin: 0 auto;

		h2 {
			text-align: center;
			margin-bottom: .35rem;
			font-size: 2.55rem;
			letter-spacing: 0.15rem;
			line-height: 130%;
			margin-top: 4rem;

			&::after {
				display: block;
				content: '';
				width: 16rem;
				height: 3px;
				background: #548493;
				margin: 1.5rem auto;
			}
		}

		section {
			article {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-flow: row;

				img {
					width: 400px;
					height: 400px;
					border-radius: 50%;
					object-fit: cover;
					object-position: center;
					margin: 1.5rem;
				}

				h3 {
					margin: 0;
					padding: 0;
					letter-spacing: 0.1rem;
					font-family: 'Barrio', cursive;
					font-size: 1.3rem;
				}

				h3, p {
					padding: 0 1rem;	
				}

				p {
					line-height: 160%;
					margin-top: .85rem;
				}

				.job-title {
					font-weight: 600;
					margin-top: .25rem;
				}

				.specjalnie-dla-doktorka-na-chwile {
					object-position: top;
				}
			}

			article:nth-child(even) {
				flex-flow: row-reverse;
				text-align: right;
			}
		}
	}
`

const HomePage = () => {
	return (
		<HomePageContainer>
			<WelcomeSection/>
			<AboutUsSection/>
			<Intro/>
			<ImageSection/>
			<PeopleSection/>
		</HomePageContainer>
	)
}


export default HomePage