import AboutHome from '@/components/aboutHomePage/AboutHome'
import ContactUs from '@/components/contactusform/ContactUs'
import Hero from '@/components/hero/Hero'
import NewProperties from '@/components/new-properties/NewProperties'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewProperties />
      <AboutHome />
      <ContactUs />
    </div>
  )
}
