import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import StyledHero from '../components/StyledHero'
export default function Home() {
    return (
        <>
       <Hero hero="defaultHero">
           <Banner title="luxurious rooms" subtitle="deluxe room">
            <Link className="btn-primary" to="/rooms">Our rooms</Link>
           </Banner>
       </Hero>
       <Services/>
       <FeaturedRooms/>
       </>
    )
}

