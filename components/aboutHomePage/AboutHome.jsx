"use client";
import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function AboutHome() {
  return (
    <div className='bg-[#191919] text-white flex xl:h-[80vh]'>
      <div className='pb-8  xl:flex gap-4 xl:gap-8 justify-center items-center  max-w-screen-2xl m-auto'>
        <div className='flex flex-col gap-3 justify-start items-start p-8'>
          <h1 className='text-3xl font-bold text-center mb-8 md:text-start md:w-fit w-full line-under-white'>عدي فارس <br/> خبير الاستثمار العقاري في دبي</h1>
          <h2 className='text-3xl font-medium text-[#9e8636]'>خبرة موثوقة، نتائج متميزة</h2>

          <TextGenerateEffect duration={2} filter={false} words={'أنا عدي فارس، خبير في مجال الاستثمار العقاري بدبي، نشأت في أسرة ذات جذور عميقة في التطوير العقاري. منذ أن كنت صغيرًا، تعلمت من والدي الذي كان مطورًا عقاريًا بارزًا قام ببناء عقارات في عكا واستثمر في عقارات دبي. اليوم، أستفيد من هذه الخبرة الغنية لمساعدة الأفراد على اتخاذ قرارات استثمارية مدروسة وناجحة في سوق العقارات بدبي.'} />
 

    <h2 className='text-3xl font-medium text-[#9e8636]'>استشارات الاستثمار العقاري</h2>
              <TextGenerateEffect duration={2} filter={false} words={'أقدم خدمات استشارية متخصصة في الاستثمار العقاري، مصممة خصيصًا لمساعدتك على اتخاذ القرارات الصحيحة عند الاستثمار في عقارات دبي. بفضل خبرتي الطويلة وفهمي العميق للسوق، أضمن تقديم نصائح استراتيجية تحقق لك العائد الأمثل على استثماراتك.'} />



      </div>
        <div className='flex justify-center items-center lg:p-8'>
        {/* <iframe 
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F800700985599718%2F&show_text=false&width=267&t=0" 
            width="350"
            height="600"
            style={{border:'none',overflow:'hidden'}}
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true} 
        ></iframe> */}
      </div>
      </div>
     
    </div>
  )
}
