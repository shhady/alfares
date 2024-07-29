'use client'


import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode,EffectFade, Navigation, Thumbs,Pagination } from 'swiper/modules';


export function SwiperComponent({images}) {
  console.log(images);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (thumbsSwiper) {
          thumbsSwiper.update();
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [thumbsSwiper]);

  return (
    <div className='max-w-screen-xl m-auto'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        
      >
         {images.map((image)=>{
            return <SwiperSlide key={image}>
                <Image width={1000} height={1000} src={image.secure_url} alt='product image' className='w-full md:w-1/2 object-cover'/>
             </SwiperSlide>
        })}
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image)=>{
            return <SwiperSlide key={image}>
                <Image width={1000} height={1000} src={image.secure_url} alt='product image' style={{height:'90px', width:'100px', objectFit:'cover', border:"1px solid #b9b8b8"}}/>
             </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}
