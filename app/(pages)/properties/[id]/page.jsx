import PropertyGeneralInfo from '@/components/property-details/PropertyGeneralInfo';
import PropertyMoreInfo from '@/components/property-details/PropertyMoreInfo';
import { SwiperComponent } from '@/components/property-swiper/Swiper'
import React from 'react'

export default async function page({params}) {
    const {id} = params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-property/${id}`,
    { next: { revalidate: 360 } });
    if (!response.ok) {
      return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
    }
    const data = await response.json();

   
  return (
    <div className='md:px-8 pb-8 bg-white'>
      
        
<div className=' text-black max-w-screen-2xl m-auto '>
        <div className='py-8 px-4 md:px-8 w-full flex justify-between items-center'>
            <div className='text-2xl font-semibold'>
                {data.generalInfo.name}
            </div>
            <div className='flex flex-col text-center'>
            <div className='font-bold bg-yellow-600 rounded-lg'> {data.generalInfo.readiness}</div> 
            <div  className='font-bold'> أدنى سعر: {data.generalInfo.minPrice}</div> 
            </div>
        </div>
        <SwiperComponent images={data.images} />
        <PropertyGeneralInfo data={data.generalInfo}/>
        <PropertyMoreInfo data={data}/>
    </div>
    </div>
    
  )
}
