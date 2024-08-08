
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Camera} from 'lucide-react'
import DeleteUpdateButtons from '@/components/update-property/DeleteUpdateButtons';
export default function PropertyCard({property, showAs}) {
  console.log(property);
  return (
    <div className='flex flex-col border-2 border-gray-600 p-2 rounded-lg'>
    <Link href={`/properties/${property._id}`}>
      <div className={`relative z-1 ${showAs === 'table' ? 'flex justify-start items-center gap-4':''}`}>
      {/* <div className='absolute left-1 top-2 bg-[#9e8636] text-white rounded-xl py-1 px-2 flex justify-center items-center gap-1 text-sm'>
      {property.images.length}<Camera size={16}/> 
        </div> */}
        {/* <div className='absolute right-1 top-2 bg-[#9e8636] text-white rounded-xl py-1 px-2 text-sm'>
        {property.generalInfo.readiness}
        </div> */}
       <Image
                            width={1000} height={1000}
                            src={property.images[0]?.secure_url}
                            alt="image"
                            className={`min-h-60 max-h-60 ${showAs === 'table' ? 'w-1/4':'w-full'} h-auto object-cover rounded-lg `}
                        />
                        <div className='flex flex-col justify-start items-start gap-4'>
                        <div className='font-semibold'>الاسم: {property.generalInfo.name}</div>
                       <div className='font-semibold'>الموقع: {property.generalInfo.location}</div>
                       <div className='font-semibold'>المطور: {property.generalInfo.developer}</div>
                       

                        </div>

    </div>
    </Link>
    <DeleteUpdateButtons id={property._id}/>
    </div>
  )
}
