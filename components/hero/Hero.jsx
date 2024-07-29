import React from 'react';

export default function Hero() {
  return (
    <div className='hero-height bg-[#191919] grid lg:grid-cols-2' >
      <div className='lg:flex flex-col justify-center items-center lg:h-full h-16 max-h-80vh' >
        <video src="/hero-video.mp4" autoPlay loop muted className='w-full lg:h-1/2 h-48 object-contain'></video>
      </div>
      <div className='text-white h-full ' >
        <div className='h-full bg-cover bg-top bg-no-repeat max-h-80vh' style={{ backgroundImage: 'url("/fares-profile-pic.png")' }}>
          <div className='bg-black bg-opacity-50 h-full w-full flex flex-col justify-center gap-4 px-8 items-center text-center  bg-gradient-to-l from-[#1a1a1a] to-transparent'>
            <h1 className='lg:text-4xl text-3xl font-semibold'>استثمر مع عدي فارس</h1>
            <h2 className='lg:text-3xl text-2xl line-under'>اكتشف فرص الاستثمار العقاري الرائدة في الإمارات</h2>
            <p className='lg:text-2xl text-1xl'>استثمر في العقارات تحت الإنشاء وتمتع بعوائد استثنائية. انضم إلينا الآن وابدأ رحلة النجاح والاستثمار الذكي في سوق العقارات الإماراتي.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
