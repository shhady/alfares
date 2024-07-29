'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'

export default function PropertyCard({property}) {
  console.log(property);
  return (
    <div className='relative'>
        <div className='absolute right-1 top-2 bg-orange-950 text-white rounded-lg p-1'>
        {property.generalInfo.readiness}
        </div>
       <CldImage
                            width="200"
                            height="200"
                            src={property.images[0]}
                            sizes="100vw"
                            alt="image"
                            className="min-h-60 max-h-60 w-auto h-auto"
                        />
                        <div className='flex flex-col justify-start items-start'>
                       <div>الموقع: {property.generalInfo.location}</div>
                       <div>النوع: {property.generalInfo.propertiesType}</div>
                       <div>السعر الادنى: {property.generalInfo.minPrice}</div>
                        </div>
     

    </div>
  )
}
