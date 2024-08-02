'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { EditorContent } from '@tiptap/react';
import EditDeleteBlog from '@/components/edit-delete-blog/EditDeleteBlog';
import parse from 'html-react-parser';

export default function Page({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);
  const user = useUser();

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
    <div className='p-8 flex flex-col gap-4 min-h-[80vh]'>
      <div className='flex justify-end items-center my-4'>
        {user.user?.publicMetadata.role && <EditDeleteBlog blog={data} onBlogUpdate={fetchData} />}
      </div>
      <h1 className='text-3xl bg-gray-100 shadow-md rounded-lg p-4'>{data.title}</h1>
      <h2 className='text-2xl bg-gray-100 shadow-md rounded-lg p-4 '>الكاتب: {data.author}</h2>
      <div className='text-lg bg-gray-100 shadow-md rounded-lg p-4  prose prose-lg max-w-none'>
        {parse(data.content)}
      </div>
    </div>
  );
}
