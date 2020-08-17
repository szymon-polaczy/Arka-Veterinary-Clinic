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