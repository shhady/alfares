// AllProperties Component
// import DeleteUpdateButtons from './DeleteUpdateButtons'; // Adjust the import path accordingly
'use client'
import { useState, useEffect } from "react";
import AdminPropertyCard from "../adminPropertyCard/AdminPropertyCard";
export default function AllProperties() {
    const [data, setData] = useState([]);
    const [showAs, setShowAs] = useState('grid');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/properties/get-properties`,
                { next: { revalidate: 360 } });

            if (!response.ok) {
                return <div className='mt-8 flex justify-center items-center'>No products found</div>;
            }

            const AllProperties = await response.json();
            setData(AllProperties);
        };
        fetchData();
    }, []);

    return (
        <div className='bg-white text-black min-h-screen'>
            <div className='p-8 text-center flex flex-col gap-4 max-w-screen-2xl m-auto'>
                {/* other code */}
                <div className={`${showAs === 'table' ? '' : 'grid md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
                    {data.map((property) => {
                        return <AdminPropertyCard property={property} key={property._id} showAs={showAs} setData={setData} />;
                    })}
                </div>
            </div>
        </div>
    );
}
