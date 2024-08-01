import React from 'react'
import SocialMedia from './SocialMedia'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='flex flex-col gap-4 md:flex md:flex-row justify-between p-8 text-center w-full text-white md:gap-8 bg-[#303030]'>
        <div className='md:flex justify-center items-center gap-4'>
            <Image src={'/logo-trans.png'} alt='logo' width={150} height={150}/>
            <div className='flex flex-col justify-start items-start gap-4'>
            <div>عنوان </div> 
           <div>هاتف: </div> 
           <div>ايميل: </div> 
            </div>
          
        </div>
        <div>
        <ul className="flex flex-col items-center gap-4">
                    <Link href='/'>
                        <li>الرئيسية</li>
                    </Link>
                    <Link href='/properties'>
                        <li>عقارات دبي</li>
                    </Link>
                    <Link href='/contact'>
                        <li>تواصل معي</li>
                    </Link>
                    <Link href='/blog'>
                        <li>مدونه</li>
                    </Link>
                    <Link href='/about'>
                        <li>من نحن</li>
                    </Link>
                </ul>
        </div>
        <SocialMedia />
    </div>
  )
}
