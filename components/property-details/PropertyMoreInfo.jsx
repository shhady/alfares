import React from 'react'

export default function PropertyMoreInfo({data}) {
  return (
    <div  className='p-2 shadow-2xl flex flex-col gap-2 mt-4'>
        <div className='text-2xl mt-2 '>تفاصيل اوفى</div>
        <div className='font-bold mt-2'>وصف العقار</div>
        <div>{data.description}</div>
        <div className='font-bold mt-2'>الاسعار</div>
        <div><span className='font-bold'>استوديو</span>:{data.prices.studio}</div>
        <div><span className='font-bold'>غرفة وصالة (1+1)</span>:{data.prices.oneBedroom}</div>
        <div><span className='font-bold'>غرفتين وصالة (2+1)</span>:{data.prices.twoBedroom}</div>
        <div><span className='font-bold'>ثلاث غرف وصالة (3+1)</span>:{data.prices.threeBedroom}</div>
        <div className='font-bold mt-2'>وصف الموقع</div>
        <div>{data.location.description}</div>
        <div className='font-bold mt-2'> طريقة الدفع</div>
        <div>{data.paymentPlan}</div>
        <div className='font-bold mt-2'>نقاط قوة المشروع</div>
        <div>{data.strengths}</div>
    </div>
  )
}
