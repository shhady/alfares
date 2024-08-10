import Carousel from '@/components/Carousel'
import AboutHome from '@/components/aboutHomePage/AboutHome'
import ContactUs from '@/components/contactusform/ContactUs'
import Hero from '@/components/hero/Hero'
import { HeroParallaxDemo } from '@/components/hero/HeroParallaxDemo'
import NewProperties from '@/components/new-properties/NewProperties'
import Reels from '@/components/reels/Reels'
import React from 'react'

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-properties`,
  // { next: { revalidate: 300 } });
  // if (!response.ok) {
  //   return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
  // }
  // const data = await response.json();
  return (
    <div>
      <Hero />
      <Reels />
      {/* <NewProperties data={data}/> */}
      <AboutHome />
      {/* <Carousel items={['gsgsdg','fdgsdgs','fgsdgsd']}/> */}
      <ContactUs />
    </div>
  )
}
