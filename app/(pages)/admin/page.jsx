'use client'
import AddProperty from '@/components/add-property/AddProperty'
import BlogForm from '@/components/blogForm/BlogForm'
import React, { useState } from 'react'

export default function page() {
    const [showForm, setShowForm] = useState('add-property-form')
  return (
    <div>
        <div className='flex max-w-screen-lg m-auto text-center p-8 text-2xl gap-4'>
            <div onClick={()=> setShowForm('add-property-form')} className={`w-full cursor-pointer border-b-2 py-2 ${showForm === 'add-property-form' ? 'bg-[#303030] rounded-lg':'bg-transparent'}`}>
                اضف مشروع
            </div>
            <div onClick={()=> setShowForm('add-blog-form')} className={`w-full cursor-pointer border-b-2 py-2 ${showForm === 'add-blog-form' ? 'bg-[#303030] rounded-lg':'bg-transparent'}`}>
                اضف مدونه
            </div>
        </div>
      {showForm === 'add-property-form' ? (<AddProperty />):(<BlogForm />)}  
    </div>
  )
}
