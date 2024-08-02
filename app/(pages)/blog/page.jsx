
import BlogList from '@/components/blog-list/BlogList'
import React from 'react'

export default async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/blogs/get-blogs`,
  { next: { revalidate: 360 } });
  if (!response.ok) {
    return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
  }
  const data = await response.json();
  return (
    <div >
        <BlogList data={data}/>
    </div>
  )
}
