import Services from '@/components/aboutUsComponents/Services'
import WhoWeAre from '@/components/aboutUsComponents/WhoWeAre'
import WhyChooseUs from '@/components/aboutUsComponents/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white'>
<div className='bg-white max-w-screen-2xl m-auto'>
  <WhoWeAre />
      <Services />
      <WhyChooseUs/>
    </div>
    </div>
    
  )
}
