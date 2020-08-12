import React from 'react'
import Styled from 'styled-components'

const HomePageContainer = Styled.main`
	padding: 2rem 0;
`;

const WelcomeInfoSection = Styled.section`
	display: flex;
	min-height: 50vh;

	section {
		width: 50%;
	}

	.img-section {
		position: relative;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			display: block;
		}

		h2 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			font-size: 3rem;
			color: #fff;
			margin: 0; 
			padding: 0;
			line-height: 120%;
			text-shadow: 0 0 .5rem #000;
			text-align: center;
		}
	}

	.info-section {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-flow: column;
		background: #202126;
		color: #999;
		padding: 5rem 2rem;

		p {
			line-height: 140%;
			letter-spacing: .02rem;
			font-size: 1.1rem;
			padding: 0;
			margin: 0;
		}

		h3 {
			margin: 0;
			padding: 2rem 0 1rem 0;
		}

		ul {
			margin: 0;
			line-height: 125%;
		}
	}
`

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
	.wrapper {
		max-width: 1200px;
		margin: 0 auto;

		h2 {
			text-align: center;
			margin-bottom: .35rem;
		}

		small {
			text-align: center;
			display: block;
		}

		section {
			display: flex;
			flex-flow: wrap;
			align-items: center;
			justify-content: center;
			margin-top: 1rem;

			article {
				width: 350px;
				margin: 1rem;
				text-align: center;
				line-height: 135%;

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
			}
		}
	}
`

const HomePage = () => {
	return (
		<HomePageContainer>

			{/*<b>Po krótku nasza oferta | Opis firmy [<a href="http://www.fizjowet.pl/">Tak jak tutaj</a>]</b><br/> TO JEST TO WYŻEJ <br/>
			Jakiś krótki opis veta / ludzi tam pracujących a poniżej króciutki opis naszej oferty  (Podoba mi się ten paralax effect)*/}
			<WelcomeInfoSection>
				<section className="img-section">
					<h2>Arka <br/> Poznajmy się</h2>
					<img src="Images/cat-welcomeinfo.jpg" alt="Kot"/>
				</section>
				<section className="info-section">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
						efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
						ec quam lacinia accumsan. Etiam interdum varius venenatis. Quisque 
						nec congue ipsum, et tempus risus. Vestibulum lacinia sed magna non 
						euismod. Orci varius natoque penatibus et magnis dis parturient 
						montes, nascetur ridiculus mus. Sed sollicitudin lectus 
						vel nunc pretium iaculis</p>

					<h3>Najważniejsze elementy naszej oferty</h3>

					<ul>
						<li>badamy krew na miejscu w ciągu 15 minut, zarówno biochemię jak i morfologię</li>
						<li>wykonujemy USG</li>
						<li>wykonujemy zdjęcia RTG, na wysokiej jakości aparacie</li>
						<li>wykonujemy EKG</li>
						<li>wykonujemy sanację jamy ustnej czyli ultradźwiękowe czysczenie zębów wraz z polerowaniem</li>
						<li>badamy kał i mocz</li>
						<li>badamy zeskrobiny i wymazy pod mikroskopem</li>
						<li>z pobranego materiału pobieramy wymazy,zeskrobiny aby hodować bakterie potrzebne do wykonania antybiogramu</li>
						<li>operacje wykonujemy pod stałym monitoringiem akcji serca i wysycenia tkanek tlenem</li>
						<li>zakładamy znieczulenie nadoponowe</li>
						<li>posiadamy aparat do znieczulenia wziewnego, czyli najbezpieczniejszej metody sedacji</li>
					</ul>
				</section>
			</WelcomeInfoSection>

			<b>Co o nas mówią? [<a href="https://www.skvet.pl/">Tak jak tutaj</a>]</b> <br/>
			Tutaj żeby wyświetlały się opinie osób które miał u nas zwierzaka - zdjęcie zwierzaka (opcjonalne) | opinia | podpis

			{/*<b>Nasi specjaliście | Nasza załoga [Tak jak <a href="https://www.skvet.pl/">tutaj</a> i <a href="http://pulsvet.com.pl/">tutaj</a>]</b><br/>
			Chcę żeby to było schludnie jak w skvet-cie ale żeby to bardziej u nas była karuzela z pracującymi osobami / po prostu ich 
			wszystkich wyświetlić na raz (Potem fajnie by też było dodać osoby które są ochotnikami w Łapie - tam też je dodać)*/}
			<PeopleSection>
				<div className="wrapper">
					<h2>Oto nasza załoga</h2>
					<small>, która zawsze dba aby twój miłośnik dostał to co dla niego najlepsze</small>
					<section>
						<article>
							<img src="Images/people/doktorek.jpg" alt="Doktor"  className="specjalnie-dla-doktorka-na-chwile"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
						<article>
							<img src="Images/people/iza.jpg" alt="Iza"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
						<article>
							<img src="Images/people/michalina.jpg" alt="Michalina"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
						<article>
							<img src="Images/people/julia.jpg" alt="Żaneta"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
						<article>
							<img src="Images/people/krzysiu.jpg" alt="Krzysiek"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
						<article>
							<img src="Images/people/maria.jpg" alt="Maria"/>
							<h3>Technik Weterynari</h3>
							<p>Tutaj jakiś króciótki opis czy coś, no nie wiem coś by chyba się przydało</p>
						</article>
					</section>
				</div>
			</PeopleSection>

			<b>Mały kontakt + Mapka + Link do rezerwacji [<a href="https://www.skvet.pl/">Tak jak tutaj</a>]</b><br/>
			Krótki kontakt z tylko najważniejszymi informacjami + zachęta do rezerwacji (strona kontakt) + mapka schludnie wyglądająca


			{/*<b>Nasi partnerzy [<a href="http://www1.up.poznan.pl/ucmw/">Tak jak tutaj</a>]</b><br/>
			Żeby się tutaj na dole prezentowały ikony naszych partnerów | Schludnie i przejrzyście*/}
			<PartnersSection>
				<h2>Nasi Partnerzy</h2>
				<article>
					<img src="Images/partners/hipra.png" alt="hipra"/>
					<img src="Images/partners/hipromine.png" alt="hipromine"/>
					<img src="Images/partners/kruuse.png" alt="kruuse"/>
					<img src="Images/partners/merial.png" alt="merial"/>
					<img src="Images/partners/royal-canin.png" alt="royal-canin"/>
				</article>
			</PartnersSection>

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