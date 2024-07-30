'use client'
import React from 'react'
import Link from 'next/link';

export default function DeleteUpdateButtons({id}) {
    async function handleDeleteProperty() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/delete-property/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to delete property');
          }
      
          const result = await response.json();
          console.log('Property deleted successfully:', result);
      
          // Handle any additional logic after successful deletion, e.g., redirect or update state
        } catch (error) {
          console.error('Error deleting property:', error.message);
          // Handle error UI here
        }
      }
      
  return (
    <div>
          <div className='flex justify-end items-center gap-4 p-4'>
      <Link href={`/properties/update/${id}`}> <button className='bg-green-500 py-1 px-3 rounded-lg'>edit</button></Link> 
        <button className='bg-red-500 py-1 px-3 rounded-lg' onClick={handleDeleteProperty}>delete</button>
        </div>
    </div>
  )
}
