'use client'
import React from 'react';
import SocialMedia from './SocialMedia';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaPhone, FaWhatsapp } from "react-icons/fa"
export default function Footer() {
    function sendEmail() {
        window.location.assign("mailto:adyfares10@icloud.com");
      }
  return (
    <div className='bg-[#303030] text-white p-8'>
      {/* Mobile View */}
      <div className='md:hidden flex flex-col items-center gap-5 text-center'>
        <Image src='/Adi_Fares_Logo-footer.png' alt='logo' width={150} height={150} className='w-auto h-auto'/>
        <div className='flex flex-col gap-4 w-full'>
          <h2 className='font-bold my-2'>روابط سريعة</h2>
        <ul className='flex justify-evenly items-start gap-8'>
       
            <div className='flex flex-col gap-4'>
            <Link href='/'><li>الرئيسية</li></Link>
          <Link href='/properties'><li>عقارات دبي</li></Link>
          <Link href='/contact'><li>تواصل معي</li></Link>
          <Link href='/blog'><li>مقالات</li></Link>
            </div>
          <div className='flex flex-col gap-4'>
         
          <Link href='/about'><li>من نحن</li></Link>
          <Link href='/privacy-policy'><li>سياسة الخصوصية</li></Link>
          <Link href='/terms-of-use'><li>شروط الاستخدام</li></Link>
          
          </div>
        </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold my-4'>تواصل معنا</h2>
            <div>عنوان: شارع الشيخ زايد، دبي، الإمارات العربية المتحدة</div>
            <div>هاتف: 00972542464585</div>
            <div>ايميل: adyfares10@icloud.com</div>
            <div className="flex justify-center xl:justify-start items-center gap-4">
      <FaPhone className="iconPhone" onClick={() => window.open("tel:0542464585", "_blank")} />
      <Mail className="iconEmail" onClick={sendEmail} />
      <Link href="https://api.whatsapp.com/send?phone=972542464585" target="_blank" rel="noreferrer">
            <FaWhatsapp className="iconFacebook" />
        
      </Link>
      </div>
          </div>
          <div className=' flex flex-col gap-4'>
        <h2 className='font-bold my-4'>تابعنا</h2>

        <SocialMedia />
        <div dir='ltr'>© 2024 Alfares.</div>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className='hidden md:grid md:grid-cols-2 xl:grid-cols-4'>
        <div className='flex flex-col justify-center items-center'>
          <Image src='/Adi_Fares_Logo-footer.png' alt='logo' width={150} height={100} className='w-auto h-auto'/>
        
          <div dir='ltr' className='text-center'>© 2024 Alfares.</div>

          </div>
          <div className='flex flex-col gap-4 md:text-center xl:text-start'>
            <h2 className='font-bold md:mt-4 xl:my-0'>تواصل معنا</h2>
            <div>عنوان: شارع الشيخ زايد، دبي، الإمارات العربية المتحدة</div>
            <div>هاتف: 00972542464585</div>
            <div>ايميل: adyfares10@icloud.com</div>
          </div>
          <div className='flex flex-col gap-4 xl:px-8 '>
          <h2 className='font-bold md:text-center xl:text-start md:my-4 xl:my-0'>روابط سريعة</h2>
        <ul className='flex md:justify-evenly xl:justify-start items-start gap-12'>
       
            <div className='flex flex-col gap-4'>
            <Link href='/'><li>الرئيسية</li></Link>
          <Link href='/properties'><li>عقارات دبي</li></Link>
          <Link href='/contact'><li>تواصل معي</li></Link>
          
            </div>
          <div className='flex flex-col gap-4'>
          <Link href='/blog'><li>مقالات</li></Link>
          <Link href='/about'><li>من نحن</li></Link>
          
          </div>
        </ul>
          </div>
         
        <div className=' flex flex-col gap-4 md:text-center xl:text-start'>
        <h2 className='font-bold md:my-4 xl:my-0'>تابعنا</h2>

        <SocialMedia />
        <Link href='/privacy-policy'><li>سياسة الخصوصية</li></Link>
          <Link href='/terms-of-use'><li>شروط الاستخدام</li></Link>
        </div>
        
      </div>
      
      {/* Bottom Section for both mobile and desktop */}
      {/* <div className='flex flex-col items-center mt-8 md:mt-4'>
        <div className='flex gap-4'>
          <Link href='https://www.instagram.com/'>
            <img src='/path/to/instagram-icon.png' alt='Instagram' className='w-6 h-6' />
          </Link>
          <Link href='https://www.facebook.com/'>
            <img src='/path/to/facebook-icon.png' alt='Facebook' className='w-6 h-6' />
          </Link>
          <Link href='https://www.youtube.com/'>
            <img src='/path/to/youtube-icon.png' alt='YouTube' className='w-6 h-6' />
          </Link>
          <Link href='https://www.linkedin.com/'>
            <img src='/path/to/linkedin-icon.png' alt='LinkedIn' className='w-6 h-6' />
          </Link>
          <Link href='https://www.snapchat.com/'>
            <img src='/path/to/snapchat-icon.png' alt='Snapchat' className='w-6 h-6' />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
