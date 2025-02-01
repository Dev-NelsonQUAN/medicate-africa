import React from 'react'
import Header from './components/static/Header'
import Heropage from './components/pages/Heropage'
import AfterHero from './components/pages/AfterHero'
import AboutUs from './components/pages/AboutUs'
import Facilities from './components/pages/Facilities'
import AboutDetails from './components/pages/AboutDetails'
import Services from './components/pages/Services'
import Portfolio from './components/pages/Portfolio'
import Steps from './components/pages/Steps'
import OurTeam from './components/pages/OurTeam'
import Appointment from './components/pages/Appointment'
import GlobalLayout from './layout/GlobalLayout'
import OurClients from './components/pages/OurClients'
import OurBlog from './components/pages/OurBlog'
import Footer from './components/static/Footer'

const App = () => {
  return (
    <GlobalLayout>
      <Header />
      <Heropage />
      <AfterHero />
      <AboutUs />
      <Facilities />
      <AboutDetails />
      <Services />
      <Portfolio />
      <Steps />
      <OurTeam />
      <Appointment />
      <OurClients />
      <OurBlog />
      <Footer />
    </GlobalLayout>
  )
}

export default App