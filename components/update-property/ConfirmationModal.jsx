'use client';
import React from 'react';

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
                <div className="flex justify-end gap-4">
                    <button
                        className="bg-gray-300 py-1 px-4 rounded-lg"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 text-white py-1 px-4 rounded-lg"
                        onClick={onConfirm}
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
