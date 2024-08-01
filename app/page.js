import AboutHome from '@/components/aboutHomePage/AboutHome'
import ContactUs from '@/components/contactusform/ContactUs'
import Hero from '@/components/hero/Hero'
import { HeroParallaxDemo } from '@/components/hero/HeroParallaxDemo'
import NewProperties from '@/components/new-properties/NewProperties'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HeroParallaxDemo />
      <NewProperties />
      <AboutHome />
      <ContactUs />
    </div>
  )
}
