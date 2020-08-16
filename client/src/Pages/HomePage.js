import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

import WelcomeSection from './HomePageComponents/WelcomeSection'

const HomePageContainer = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: #1b1b1b;
	color: #fff;
`;

const PeopleSection = Styled.section`
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

const VeryExplicitWelcome = Styled.header`
	position: relative;
	height: calc(100vh - 5rem);
	background: #1b1b1b;

	h2 {
		paddding: 0;
		margin: 0;
		text-align: center;
		color: #fff;
		font-family: 'Barrio', cursive;
		text-transform: uppercase;
		font-size: 12rem;
		position: absolute;
		left: 50%;
		top: 50%;
		opacity: 0;
	}

	.top-heading {
		z-index: 5;
		animation: slide-in-left 2s forwards;
	}

	.bottom-heading {
		z-index: 15;
		animation: slide-in-right 2s forwards;
	}

	img {
		position: absolute;
		z-index: 10;
		max-height: 100%;
		left: 50%;
		top: 12%;
		transform: translateX(-50%);
	}

	@keyframes slide-in-left {
		0% { opacity: 0; transform: translateX(-100%) translateY(-2em); }
		100% { opacity: 1; transform: translateX(-50%) translateY(-2em); }
	}

	@keyframes slide-in-right {
		0% { opacity: 0; transform: translateX(0) translateY(3rem); }
		100% { opacity: 1; transform: translateX(-50%) translateY(3rem); }
	}
`

const VerySimpleGetToKnowUsSection = Styled.section`
	padding: 3.5rem 5rem;
	letter-spacing: 0.1rem;
	line-height: 145%;
	display: flex;
	justify-content: space-between;
	background: #548493;

	p {
		max-width: 40ch;
	}

	article {
		display: flex;
		align-items: center;

		a {
			width: 17rem;
			font-family: 'Barrio', cursive;
			letter-spacing: 0.1rem;
			font-size: 1.2rem;
		}

		img {
			max-height: 3.5rem;
		}
	}
`

const ThreeStageIntro = Styled.section`
	display: flex;
	align-items: center;

	a {
		flex: 1;
		text-align: center;
		padding: 10rem 2rem;

		article {
			transition: all .2s ease-out;
		}

		&:hover {
			text-decoration: none !IMPORTANT; /*I don't understand why this important need to be here because it should work just fine without it - try to fix this*/

			article {
				transform: scale(1.15);
			}

			p::after {
				transform: scaleX(1);
			}
		}

		h2 {
			margin: .65rem 0;
			font-family: 'Barrio', cursive;
			letter-spacing: 0.1rem;
		}

		p {
			font-weight: 600;

			&::after {
				display: block;
				content: '';
				width: 10rem;
				height: 2px;
				background: #548493;
				transform: scaleX(0);
				transition: .15s transform ease-out;
				margin: .35rem auto 0 auto;
			}
		}

		img {
			max-height: 5rem;
		}
	}

	a:nth-child(2) {
		flex: 2;
		background: #fff;
		color: #1b1b1b;
	}
`

const SectionBrakerImage = Styled.section`
	img {
		max-height: 500px;
		width: 100%;
		object-fit: cover;
		object-position: 50% 64%;
	}
`

const HomePage = () => {
	return (
		<HomePageContainer>
			<WelcomeSection/>

			{/*}

			<VeryExplicitWelcome>
				<h2 className="top-heading">Daj głos swojemu</h2>
				<img src="Images/cat-welcomeinfo.png" alt="Kot" />
				<h2 className="bottom-heading">kompanowi</h2>
			</VeryExplicitWelcome>

			<VerySimpleGetToKnowUsSection>
				<article>
					<Link to="/kontakt">Poznaj nas bliżej</Link>
					<img src="Images/svg/crow-solid.svg" alt="Ptaszek"/>
				</article>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
				efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
				ec quam lacinia accumsan. Etiam interdum varius venenatis. Quisque 
				nec congue ipsum, et tempus risus. Vestibulum lacinia sed magna non 
				euismod. Orci varius natoque penatibus et magnis dis parturient 
				montes, nascetur ridiculus mus. Sed sollicitudin lectus 
				vel nunc pretium iaculis</p>
			</VerySimpleGetToKnowUsSection>

			<ThreeStageIntro>
				<Link to="/blog">
					<article>
						<img src="Images/svg/comment-medical-solid.svg" alt="Rozmowa	"/>
						<h2>Blog</h2>
						<p>Zrozum lepiej swoją rodzinę</p>
					</article>
				</Link>
				<Link to="/oferta">
					<article>
						<img src="Images/svg/child-solid.svg" alt="Człowiek"/>
						<h2>Nasza Oferta</h2>
						<p>Co możesz dla niego zrobić?</p>
					</article>
				</Link>
				<Link to="/galeria">
					<article>
						<img src="Images/svg/cat-solid.svg" alt="Kotek"/>
						<h2>Galeria</h2>
						<p>Poznaj naszych przyjaciół</p>
					</article>
				</Link>
			</ThreeStageIntro>

			<SectionBrakerImage>
				<img src="Images/kitty.jpg" alt="Kotek"/>
			</SectionBrakerImage>
			
			<PeopleSection>
				<div className="wrapper">
					<h2>Oto ludzie dbający o to co dla Ciebie <br/> Najważniejsze</h2>
					<section>
						<article>
							<img src="Images/people/doktorek.jpg" alt="Doktor"  className="specjalnie-dla-doktorka-na-chwile"/>
							<section>
								<h3>Doktorek</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
						<article>
							<img src="Images/people/iza.jpg" alt="Iza"/>
							<section>
								<h3>Iza</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
						<article>
							<img src="Images/people/michalina.jpg" alt="Michalina"/>
							<section>
								<h3>Michalina</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
						<article>
							<img src="Images/people/julia.jpg" alt="Żaneta"/>
							<section>
								<h3>Julia</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
						<article>
							<img src="Images/people/krzysiu.jpg" alt="Krzysiek"/>
							<section>
								<h3>Krzysiek</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
						<article>
							<img src="Images/people/maria.jpg" alt="Maria"/>
							<section>
								<h3>Maria</h3>
								<h3 className="job-title">Technik Weterynari</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
								efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
								ec quam lacinia accumsan. Etiam interdum varius venenatis.</p>
							</section>
						</article>
					</section>
				</div>
	</PeopleSection>*/}
		</HomePageContainer>
	)
}


export default HomePage