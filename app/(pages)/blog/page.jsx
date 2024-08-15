
'use client'
import BlogList from '@/components/blog-list/BlogList'
import React, {useState, useEffect} from 'react'

export default function Blog() {
  const [data, setData ] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/blogs/get-blogs`)
      const data = await response.json();
      setData(data);
    }
    fetchData()
    
  },[])

  return (
    <div >
        <BlogList data={data}/>
        {/* when adding */}
    </div>
  )
}
