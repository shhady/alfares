import Image from 'next/image';
import React from 'react';
import HeroFilter from './HeroFilter'; // Import the HeroFilter component
import styles from './Hero.module.css'; // Import the CSS module
import ContactUs from '../contactusform/ContactUs';

export default async function Hero() {
  // Fetch the data server-side for the options
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-properties`);
//   const data = await response.json();
    
  return (
    <div className='lg:hero-height flex flex-col lg:flex lg:flex-row bg-white'>
      <div className={`lg:w-full lg:flex flex-col justify-center items-center h-full min-h-[80vh] ${styles.animatedBackground}`}>
        {/* <div className={`bg-black bg-opacity-50 p-4 w-full h-full flex flex-col justify-center items-center gap-8 text-center ${styles.content}`}>
          <h1 className='lg:text-4xl text-3xl font-semibold'>استثمر مع عدي فارس</h1>
          <h2 className='lg:text-3xl text-2xl line-under-white'>اكتشف فرص الاستثمار العقاري الرائدة في الإمارات</h2>
          <p className='lg:text-2xl text-1xl'>استثمر في العقارات تحت الإنشاء وتمتع بعوائد استثنائية. انضم إلينا الآن وابدأ رحلة النجاح والاستثمار الذكي في سوق العقارات الإماراتي.</p>
          <HeroFilter data={data} /> 
          Include the filter component
        </div> */}
               {/* <div className={`bg-black bg-opacity-50 p-4 w-full h-full flex flex-col justify-center items-center gap-8 text-center ${styles.content}`}> */}
        <div className={`bg-black bg-opacity-50 lg:pt-8 w-full min-h-[80vh]`}>
          <div className={`${styles.content} `}>
          <ContactUs hero={'hero'}/>

          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
}
