import React from 'react'
import Styled from 'styled-components'

const HomePageContainer = Styled.main`
	padding: 2rem .65rem;
`;

const HomePage = () => {
	return (
		<HomePageContainer>
			<h2>Strona Głowna Arki</h2>

			<b>Po krótku nasza oferta | Opis firmy [<a href="http://www.fizjowet.pl/">Tak jak tutaj</a>]</b><br/>
			Jakiś krótki opis veta / ludzi tam pracujących a poniżej króciutki opis naszej oferty  (Podoba mi się ten paralax effect)

			<br/><br/>

			<b>Co o nas mówią? [<a href="https://www.skvet.pl/">Tak jak tutaj</a>]</b> <br/>
			Tutaj żeby wyświetlały się opinie osób które miał u nas zwierzaka - zdjęcie zwierzaka (opcjonalne) | opinia | podpis

			<br/><br/>

			<b>Nasi specjaliście | Nasza załoga [Tak jak <a href="https://www.skvet.pl/">tutaj</a> i <a href="http://pulsvet.com.pl/">tutaj</a>]</b><br/>
			Chcę żeby to było schludnie jak w skvet-cie ale żeby to bardziej u nas była karuzela z pracującymi osobami / po prostu ich 
			wszystkich wyświetlić na raz (Potem fajnie by też było dodać osoby które są ochotnikami w Łapie - tam też je dodać)

			<br/><br/>

			<b>Nasi partnerzy [<a href="http://www1.up.poznan.pl/ucmw/">Tak jak tutaj</a>]</b><br/>
			Żeby się tutaj na dole prezentowały ikony naszych partnerów | Schludnie i przejrzyście

			<br/><br/>

			<b>Mały kontakt + Mapka + Link do rezerwacji [<a href="https://www.skvet.pl/">Tak jak tutaj</a>]</b><br/>
			Krótki kontakt z tylko najważniejszymi informacjami + zachęta do rezerwacji (strona kontakt) + mapka schludnie wyglądająca

			<br/><br/>

			<b><i>Stopka z copyright i linkiem do mnie</i></b>

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