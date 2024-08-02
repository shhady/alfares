
import Link from 'next/link';

export default  function BlogList({data}) {
  
    return (
      <div className='p-8 flex flex-col items-center min-h-dvh'>
        <h1 className="text-3xl text-center relative inline-block mb-8 py-4">
        مقالة
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
  
