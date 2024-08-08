'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ConfirmationModal from './ConfirmationModal';

export default function DeleteUpdateButtons({ id, setData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteProperty = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/properties/delete-property/${id}`, {
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

            // Update the data by filtering out the deleted property
            setData((prevData) => prevData.filter(property => property._id !== id));

            setIsModalOpen(false); // Close the modal
        } catch (error) {
            console.error('Error deleting property:', error.message);
        }
    };

    return (
        <>
            <div className="flex justify-end items-center gap-4 p-4">
                <Link href={`/properties/update/${id}`}>
                    <button className="bg-green-500 py-1 px-3 rounded-lg">edit</button>
                </Link>
                <button
                    className="bg-red-500 py-1 px-3 rounded-lg"
                    onClick={() => setIsModalOpen(true)}
                >
                    delete
                </button>
            </div>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDeleteProperty}
            />
        </>
    );
}
