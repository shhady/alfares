import React from 'react'

export default function PropertyGeneralInfo({data}) {
  return (
    <div className='p-2 shadow-2xl flex flex-col gap-2'>
        <div className='text-2xl my-2'>
        معلومات عامه:
        </div>
       {data.location &&  <div className='bg-[#e7e5e5] rounded-lg p-1'>
        الموقع: {data.location}
        </div>}
       {data.minPrice && <div>
        ابتداءً من: {data.minPrice}  درهم اماراتي
        </div>}
       {data.propertiesType &&  <div className='bg-[#e7e5e5] rounded-lg p-1'>
        نوع العقار: {data.propertiesType}
        </div>}
       {data.developer &&  <div>
        المطور العقاري: {data.developer}
        </div>}

      {data.deliveryDate && <div className='bg-[#e7e5e5] rounded-lg p-1'>
        التسليم: {data.deliveryDate}
        </div>} 
        
    </div>
  )
}
