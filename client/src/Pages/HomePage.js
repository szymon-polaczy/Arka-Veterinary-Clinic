import React, {useEffect} from 'react'

import WelcomeSection from './HomePageComponents/WelcomeSection'
import Intro from './HomePageComponents/Intro'
import ImageSection from './HomePageComponents/ImageSection'
import AboutUsSection from './HomePageComponents/AboutUsSection'
import PeopleSection from './HomePageComponents/PeopleSection'

const HomePage = () => {
	useEffect(() => {
    window.scrollTo(0,0)
	}, [])
	
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