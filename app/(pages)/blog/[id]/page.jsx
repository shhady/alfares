'use client'
import EditDeleteBlog from '@/components/edit-delete-blog/EditDeleteBlog';
import React, { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/blogs/get-blog/${id}`);
    if (response.ok) {
      const blogData = await response.json();
      setData(blogData);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) {
    return <div className='mt-8 flex justify-center items-center'>Loading ...</div>;
  }

  return (
    <div className='p-8 flex flex-col gap-4'>
      <div className='flex justify-end items-center my-4'>
        <EditDeleteBlog blog={data} onBlogUpdate={fetchData} />
      </div>
      <h1 className='text-3xl'>{data.title}</h1>
      <h2 className='text-2xl'>الكاتب: {data.author}</h2>
      <p className='text-lg'>{data.content}</p>
    </div>
  );
}
