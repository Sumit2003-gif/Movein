import React from 'react'
import HomeHero from '../Components/HomeHero'
import AboutUs from '../Components/HomeAbout'
import HomeService from '../Components/HomeService'
import LatestProject from '../Components/LatestProject'
import WorkProcess from '../Components/WorkProcess'
import MoversSection from '../Components/MoversSection'
import QuoteSection from '../Components/QuteoSection'
import BlogSection from '../Components/BlogSection'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <section>
      <HomeHero/>
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
        <HomeService/>
      </section>
      <section>
        <LatestProject/>
      </section>
      <section>
        <WorkProcess/>
      </section>
      <section>
        <MoversSection/>
      </section>
      <section>
        <QuoteSection/>
      </section>
      <section>
        <BlogSection/>

      </section>
    </div>
  )
}

export default Home
