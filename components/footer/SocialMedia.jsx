'use client'
import React from 'react';
import { Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { FaFacebook, FaInstagram,  FaWhatsapp,FaPhone } from "react-icons/fa"
import "./social.css";
import Link from 'next/link';
export default function SocialMedia() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:adyfares10@icloud.com");
  }

  return (
    <div>
    <h1 className='text-[1rem] text-start mb-4 hidden md:block border-b-2 border-white py-2'>تواصل</h1>
    <div className="flex justify-center items-center gap-4">
      <FaPhone className="iconPhone" onClick={() => window.open("tel:0542464585", "_blank")} />
      <Mail className="iconEmail" onClick={sendEmail} />
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
    </div>
  );
}
