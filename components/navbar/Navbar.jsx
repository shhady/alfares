'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser, isSignedIn, SignOutButton } from '@clerk/nextjs'
import { FaFacebook, FaInstagram,  FaWhatsapp,FaPhone } from "react-icons/fa"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const pathName = usePathname()
    const {user, isSignedIn} = useUser();


        const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const isActive = (route) => pathName === route ? ' bg-[#dbb454] text-white px-4 py-2 rounded-md' : 'px-4 py-2 text-white';

    return (
        <div className="bg-[#303030] py-4 lg:px-16 px-4 h-24 flex items-center fixed top-0 left-0 right-0 z-50">
            <div className='w-full flex justify-between items-center max-h-full'>
             <div className="flex flex-grow lg:flex-grow-0 justify-center lg:justify-start">
             <Link href='/' className=' flex justify-center lg:justify-start items-center'>  <Image src='/Adi_Fares_LogoWhite-01.png' alt="logo" width={200} height={100} className='w-auto h-1/2'/></Link>
            </div>
            
            <div className="hidden lg:flex gap-4">
                <ul className="flex gap-6">
                    <Link href='/'>
                        <li className={isActive('/')}>الرئيسية</li>
                    </Link>
                    {/* <Link href='/properties'>
                        <li className={isActive('/properties')}>عقارات دبي</li>
                    </Link> */}
                    <Link href='/contact'>
                        <li className={isActive('/contact')}>تواصل معي</li>
                    </Link>
                    <Link href='/blog'>
                        <li className={isActive('/blog')}>مقالات</li>
                    </Link>
                    <Link href='/about'>
                        <li className={isActive('/about')}>من نحن</li>
                    </Link>
                </ul>
            </div>
            <div className='hidden lg:flex gap-6'>
                    <Link href="https://api.whatsapp.com/send?phone=972542464585" target="_blank" rel="noreferrer">
                     <FaWhatsapp className="iconFacebook" />
        
                     </Link>
                      <Link href="https://www.instagram.com/ady_alfares/" target="_blank" rel="noreferrer">
                      <FaInstagram className="iconFacebook" />
                      </Link>
                     <Link href="https://www.facebook.com/profile.php?id=100064084111341" target="_blank" rel="noreferrer">
                      <FaFacebook className="iconFacebook" />
                     </Link>
                     {isSignedIn && <SignOutButton className="text-white"/>}

                     </div>
                     </div>
            <div className="lg:hidden absolute right-4" onClick={toggleMenu}>
                <Menu className='text-white'/>
            </div>
            

             {/* Backdrop Div */}
      {openMenu && (
        <div className="fixed inset-0 top-24 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
      )}

      {/* Menu Div */}
      <div className={`fixed top-24 left-0 right-0 bg-[#303030] lg:hidden z-20 transition-transform duration-300 ease-in-out ${openMenu ? 'flex' : 'hidden'} flex-col items-center gap-6 py-4 ${openMenu ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}`}>
        <ul className="flex flex-col items-center gap-4">
          <Link href='/' onClick={toggleMenu}>
            <li className={isActive('/')}>الرئيسية</li>
          </Link>
          {/* <Link href='/properties' onClick={toggleMenu}>
            <li className={isActive('/properties')}>عقارات دبي</li>
          </Link> */}
          <Link href='/contact' onClick={toggleMenu}>
            <li className={isActive('/contact')}>تواصل معي</li>
          </Link>
          <Link href='/blog' onClick={toggleMenu}>
            <li className={isActive('/blog')}>مقالات</li>
          </Link>
          <Link href='/about' onClick={toggleMenu}>
            <li className={isActive('/about')}>من نحن</li>
          </Link>
          <div className='flex gap-6'>
          <FaPhone className="iconPhone" onClick={() => window.open("tel:0542464585", "_blank")} />
            <Link href="https://api.whatsapp.com/send?phone=972542464585" target="_blank" rel="noreferrer">
              <FaWhatsapp className="iconFacebook" />
            </Link>
            <Link href="https://www.instagram.com/ady_alfares/" target="_blank" rel="noreferrer">
              <FaInstagram className="iconFacebook" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100064084111341" target="_blank" rel="noreferrer">
              <FaFacebook className="iconFacebook" />
            </Link>
          </div>
          {isSignedIn && <SignOutButton className="text-white" />}
        </ul>
      </div>
        </div>
    )
}
