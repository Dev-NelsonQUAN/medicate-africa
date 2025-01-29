import React from 'react'
import Header from './components/static/Header'
import Heropage from './components/pages/Heropage'
import AfterHero from './components/pages/AfterHero'
import AboutUs from './components/pages/AboutUs'
import Facilities from './components/pages/Facilities'
import AboutDetails from './components/pages/AboutDetails'
import Services from './components/pages/Services'

const App = () => {
  return (
    <div>
      <Header/>
      <Heropage />
      <AfterHero />
      <AboutUs />
      <Facilities />
      <AboutDetails />
      <Services />
    </div>
  )
}

export default App