'use client'
import React from 'react';
import { Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import "./social.css";

export default function SocialMedia() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:shhadyse@gmail.com");
  }

  return (
    <div>
    <h1 className='text-[1rem] text-start mb-4 hidden md:block border-b-2 border-white py-2'>تواصل</h1>
    <div className="flex justify-center items-center gap-4">
      <Phone className="iconPhone" onClick={() => window.open("tel:0543113297", "_blank")} />
      <Mail className="iconEmail" onClick={sendEmail} />
      <a href="https://api.whatsapp.com/send?phone=972543113297" target="_blank" rel="noreferrer">
        <div className='bg-green-500 rounded-lg w-24 h-16 flex justify-center items-center'>
            <div className='rounded-full border-2 border-white w-12 h-12 flex justify-center items-center'>
            <Phone />
            </div>

        </div>
      </a>
      <a href="https://www.instagram.com/shhadyse/" target="_blank" rel="noreferrer">
        <Instagram />
      </a>
      <a href="https://www.facebook.com/shhady.serhan/" target="_blank" rel="noreferrer">
        <Facebook className="iconFacebook" />
      </a>
    </div>
    </div>
  );
}
