import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomePageContainer = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: #1b1b1b;
	color: #fff;
`;

const PartnersSection = Styled.section`
	h2 {
		text-align: center;
	}

	article {
		display: flex;
		align-items: center;
		flex-flow: wrap;
		justify-content: center;

		img {
			max-height: 5rem;
			margin: .65rem;
		}
	}
`

const PeopleSection = Styled.section`
	padding-bottom: 5rem;

	.wrapper {
		max-width: 1200px;
		margin: 0 auto;

		h2 {
			text-align: center;
			margin-bottom: .35rem;
			font-size: 2rem;
			letter-spacing: 0.05rem;
			margin-top: 4rem;

			&::after {
				display: block;
				content: '';
				width: 16rem;
				height: 2px;
				background: #548493;
				margin: .65rem auto;
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
				}

				h3, p {
					padding: 0 1rem;	
				}

				p {
					line-height: 160%;
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




			/*display: flex;
			flex-flow: wrap;
			align-items: center;
			justify-content: center;
			margin-top: 1rem;

			article {
				width: 350px;
				margin: 1rem;
				text-align: center;
				line-height: 135%;

				h3 {
					padding: 0;
					margin: 0;
					margin-top: 1rem;
				}

				.job-title {
					margin-top .5rem;
					line-height: 100%;
					font-weight: 600;
				}

				img {
					width: 350px;
					height: 350px;
					border-radius: 50%;
					overflow: hidden;
					object-fit: cover;
					object-position: center;
				}

				.specjalnie-dla-doktorka-na-chwile {
					object-position: top;
				}
			}*/



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
		letter-spacing: 1rem;
		font-family: 'Barrio', cursive;
		text-transform: uppercase;
		font-size: 12rem;
		position: absolute;
		left: 50%;
		top: 50%;
	}

	.top-heading {
		z-index: 5;
		transform: translateX(-50%) translateY(-2em);
	}

	.bottom-heading {
		z-index: 15;
		transform: translateX(-50%) translateY(3rem);
	}

	img {
		position: absolute;
		z-index: 10;
		max-height: 100%;
		left: 50%;
		top: 12%;
		transform: translateX(-50%);
	}
`

const VerySimpleGetToKnowUsSection = Styled.section`
	padding: 3.5rem 5rem;
	font-size: 1.1rem;
	letter-spacing: 0.05rem;
	line-height: 130%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #548493;

	p {
		max-width: 40ch;
	}

	article {
		display: flex;
		align-items: center;

		a {
			width: 15rem;
		}

		img {
			max-height: 3rem;
		}
	}
`

const ThreeStageIntro = Styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		flex: 1;
		text-align: center;
		padding: 10rem 2rem;

		article {
			transition: transform .2s ease-out;
		}

		&:hover {
			text-decoration: none !IMPORTANT; /*I don't understand why this important need to be here because it should work just fine without it - try to fix this*/

			article {
				transform: scale(1.15);
				transition: transform .25s ease-in-out;
			}

			p::after {
				transform: scaleX(1);
				transition: .25s transform ease-out;
			}
		}

		h2 {
			margin: .65rem 0;
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
				margin: 0 auto;
				margin-top: .35rem;
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
		/*max-height: 400px;*/
		max-height: 500px;
		width: 100%;
		object-fit: cover;
		object-position: 50% 64%;
	}
`

const HomePage = () => {
	return (
		<HomePageContainer>

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
				{/*
				<img src="Images/2.jpg" alt="Kobieta z psem"/>
				<img src="Images/woman-with-a-dog.jpg" alt="Kobieta z psem"/>
				<img src="Images/4.jpg"/>
				*/}
				<img src="Images/3.jpg"/>
			</SectionBrakerImage>

			{/*<b>Nasi specjaliście | Nasza załoga [Tak jak <a href="https://www.skvet.pl/">tutaj</a> i <a href="http://pulsvet.com.pl/">tutaj</a>]</b><br/>
			Chcę żeby to było schludnie jak w skvet-cie ale żeby to bardziej u nas była karuzela z pracującymi osobami / po prostu ich 
			wszystkich wyświetlić na raz (Potem fajnie by też było dodać osoby które są ochotnikami w Łapie - tam też je dodać)*/}
			<PeopleSection>
				<div className="wrapper">
					<h2>Oto ludzie dbający o to co dla Ciebie najważniejsze</h2>
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
			</PeopleSection>

			{/*<div>
					Icons made by 
					<a href="https://www.flaticon.com/authors/smashicons" 
						title="Smashicons">Smashicons</a> 
					from 
					<a href="https://www.flaticon.com/" 
						title="Flaticon">www.flaticon.com</a>
				</div>*/}
		</HomePageContainer>
	)
}


export default HomePage