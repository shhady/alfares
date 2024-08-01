import React from 'react'
import PropertyCard from '../propertyCard/PropertyCard';
import HeroFilter from '../hero/HeroFilter';

export default async function NewProperties() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-properties`,
  { next: { revalidate: 360 } });
  if (!response.ok) {
    return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
  }
  const data = await response.json();
  return (
    <div>
                <h1 className='text-4xl text-center mt-8'>تخصيص البحث</h1>

        <HeroFilter data={data}/>
    
    <div className='p-8 text-center flex flex-col gap-4 justify-center items-center bg-white text-black'>
        <h1 className='text-4xl'>احدث العقارات</h1>
        <div className=' border-b-2 w-80'></div>
        <p className=''>اطّلع على أحدث العقارات المعروضة في الإمارات</p>
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 max-w-screen-2xl gap-4'>
            {data.slice(0,5).map((property)=>{
                return <PropertyCard property={property} key={property._id}/>
            })}
        
        </div>
    </div>
    </div>
  )
}
