import React from 'react'

export default function PropertyGeneralInfo({data}) {
  console.log(data);
  return (
    <div className='p-2 shadow-2xl flex flex-col gap-2'>
        <div className='text-2xl my-2'>
        معلومات عامه:
        </div>
        <div className='bg-[#e7e5e5] rounded-lg p-1'>
        الموقع: {data.location}
        </div>
        <div>
        نطاق السعر: {data.minPrice} - {data.maxPrice} درهم
        </div>
        <div className='bg-[#e7e5e5] rounded-lg p-1'>
        نوع العقار: {data.propertiesType}
        </div>
        <div>
        المطور العقاري: {data.developer}
        </div>
        <div className='bg-[#e7e5e5] rounded-lg p-1'>
        التسليم: {data.deliveryDate}
        </div>
        
    </div>
  )
}
