'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'

export default function PropertyCard({property}) {
  return (
    <div>
      
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
