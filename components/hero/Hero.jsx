import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.css'; // Import the CSS module

export default function Hero() {
  return (
    <div className='hero-height flex flex-col lg:flex lg:flex-row bg-white'>
      <div className={`lg:w-full lg:flex flex-col justify-center items-center lg:h-full h-1/2 max-h-80vh bg-cover ${styles.animatedBackground}`}>
        <Image src={'/hero-home-pic.png'} alt='hero' width={1000} height={1000} className='h-full w-full'/>
      </div>
      <div className='text-white h-full'>
        <div className='h-full bg-cover bg-top bg-no-repeat max-h-80vh bg-[#191919]' style={{ backgroundImage: 'url("/fares-profile-pic.png")' }}>
          <div className='bg-black bg-opacity-50 h-full w-full flex flex-col justify-center gap-4 px-8 items-center text-center bg-gradient-to-l from-[#1a1a1a] to-transparent'>
            <h1 className='lg:text-4xl text-3xl font-semibold'>استثمر مع عدي فارس</h1>
            <h2 className='lg:text-3xl text-2xl line-under'>اكتشف فرص الاستثمار العقاري الرائدة في الإمارات</h2>
            <p className='lg:text-2xl text-1xl'>استثمر في العقارات تحت الإنشاء وتمتع بعوائد استثنائية. انضم إلينا الآن وابدأ رحلة النجاح والاستثمار الذكي في سوق العقارات الإماراتي.</p>
          </div>
        </div>
      </div>
    </div>
  );
}