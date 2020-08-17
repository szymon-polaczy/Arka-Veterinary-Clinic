import React from 'react'

import WelcomeSection from './HomePageComponents/WelcomeSection'
import Intro from './HomePageComponents/Intro'
import ImageSection from './HomePageComponents/ImageSection'
import AboutUsSection from './HomePageComponents/AboutUsSection'
import PeopleSection from './HomePageComponents/PeopleSection'

const HomePage = () => {
	return (
		<>
			<WelcomeSection/>
			<AboutUsSection/>
			<Intro/>
			<ImageSection/>
			<PeopleSection/>
		</>
	)
}


export default HomePage