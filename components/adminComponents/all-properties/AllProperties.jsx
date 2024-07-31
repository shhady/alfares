'use client'
import {useState, useEffect} from 'react'
import AdminPropertyCard from '../adminPropertyCard/AdminPropertyCard';

export default function AllProperties() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-properties`,
            { next: { revalidate: 360 } });
        
          if (!response.ok) {
            return <div className='mt-8 flex justify-center items-center'>No products found</div>;
          }
        
          const AllProperties = await response.json();
          setData(AllProperties)
        }
        fetchData()
    },[])
 

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <div className='bg-white text-black min-h-screen'>
      <div className='p-8 text-center flex flex-col gap-4 max-w-screen-2xl m-auto'>
        <h1 className='text-4xl'>جميع العقارات</h1>
        <div className='border-b-2 md:w-80 w-40 mx-auto'></div>
        <p className=''>  جميع العقارات المعروضة  </p>
        {data.map((property)=>{
            return <AdminPropertyCard property={property} key={property._id}/>
        })}

      </div>
    </div>
    // </Suspense>
  );
}
