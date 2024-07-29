'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default  function BlogList() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/blogs/get-blogs', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch blogs');
            }
    
            const data = await response.json();
            setData(data); // Set the blogs in state
          } catch (err) {
            // setError(err.message); // Handle any errors
            console.error(err);
          }
        };
    
        fetchBlogs();
      }, []);
   
    
    console.log('Fetched Blogs:', data); // Log the fetched data to check
  
    return (
      <div className='p-8 flex flex-col items-center'>
        <h1 className="text-3xl text-center relative inline-block mb-8 py-4">
          المدونة
          <span className="block border-b-2 border-white w-full absolute bottom-0 left-0"></span>
        </h1>
  
        <div className='blog-list w-full'>
          {data.map((blog) => (
            <Link href={`/blog/${blog._id}`} key={blog._id}>
              <div className='blog-item p-4 border-b-2 mb-4 shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-200'>
                <h3 className='text-3xl'>{blog.title}</h3>
                <p className='text-lg mb-2'><strong>الكاتب:</strong> {blog.author}</p>
                <p className='text-lg'>{blog.content.slice(0, 200)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
