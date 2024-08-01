
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Camera} from 'lucide-react'
export default function PropertyCard({property}) {
  return (
    <Link href={`/properties/${property._id}`}>
      <div className='relative roun'>
      <div className='absolute left-1 top-2 bg-[#9e8636] text-white rounded-xl py-1 px-2 flex justify-center items-center gap-1 text-sm'>
      {property.images.length}<Camera size={16}/> 
        </div>
        <div className='absolute right-1 top-2 bg-[#9e8636] text-white rounded-xl py-1 px-2 text-sm'>
        {property.generalInfo.readiness}
        </div>
       <Image
                            width={1000} height={1000}
                            src={property.images[0]?.secure_url}
                            alt="image"
                            className="min-h-60 max-h-60 w-full h-auto object-cover rounded-t-lg "
                        />
                        <div className='flex flex-col justify-start items-start'>
                        <div className='font-semibold'>الاسم: {property.generalInfo.name}</div>
                       <div className='font-semibold'>الموقع: {property.generalInfo.location}</div>
                       <div className='font-semibold'>المطور: {property.generalInfo.developer}</div>
                       <div className='font-semibold'>النوع: {property.generalInfo.propertiesType}</div>
                       <div className='font-semibold'>السعر الادنى: {property.generalInfo.minPrice}</div>
                        </div>
     

    </div>
    </Link>
  )
}
