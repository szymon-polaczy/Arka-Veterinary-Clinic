import React from 'react'
import Styled from 'styled-components'

import WelcomeSection from './HomePageComponents/WelcomeSection'
import Intro from './HomePageComponents/Intro'
import ImageSection from './HomePageComponents/ImageSection'

const HomePageContainer = Styled.main`
	padding: 0;
	position: relative;
	z-index: 80;
	background: #1b1b1b;
	color: #fff;

	border-bottom: 10px solid #548493;
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

const HomePage = () => {
	return (
		<HomePageContainer>
			<WelcomeSection/>
			<Intro/>
			<ImageSection/>

			{/*

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