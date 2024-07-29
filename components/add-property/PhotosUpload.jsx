'use client';
import { useState } from 'react';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import crypto from 'crypto';

const generateSHA1 = (data) => {
    const hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
};

const generateSignature = (publicId, apiSecret, timestamp) => {
    return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};



export default function PhotosUpload({ setImagesArray }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleResetErrorAndSuccess = () => {
        setError(null);
        setSuccessMessage(null);
    };

    const handleDeleteImage = async (publicId) => {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
        const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
        const timestamp = Math.floor(Date.now() / 1000); // Cloudinary requires a timestamp in seconds
        const signature = generateSHA1(generateSignature(publicId, apiSecret, timestamp));

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    public_id: publicId,
                    signature: signature,
                    api_key: apiKey,
                    timestamp: timestamp,
                }),
            });

            const data = await response.json();
            console.log(data);

            // Update state to remove the image from the array
            if (data.result === 'ok') {
                setImages((prevImages) => {
                    const updatedImages = prevImages.filter((id) => id !== publicId);
                    setImagesArray(updatedImages); // Pass the updated images array to the parent component
                    return updatedImages;
                });                setSuccessMessage('Image deleted successfully');
            } else {
                setError('Failed to delete image from Cloudinary');
            }
        } catch (error) {
            setError('Failed to delete image');
            console.error(error);
        }
    };

    const handleUploadSuccess = (results) => {
        const newImageId = results.info.public_id;
        setImages((prevImages) => {
            const updatedImages = [...prevImages, newImageId];
            setImagesArray(updatedImages); // Pass the updated images array to the parent component
            return updatedImages;
        });
    };

    return (
        <>
            <CldUploadButton
                uploadPreset="alfares"
                className="bg-lime-800 w-full rounded-lg p-2"
                onSuccess={handleUploadSuccess}
                onClick={handleResetErrorAndSuccess}
            >
                ارفع الصور
            </CldUploadButton>

            {/* Display messages */}
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            {/* Example of rendering uploaded images */}
            <div className="flex flex-wrap w-full gap-2 justify-center items-center">
                {images.map((publicId) => (
                    <div key={publicId} className="relative">
                        <CldImage
                            width="180"
                            height="400"
                            src={publicId}
                            sizes="100vw"
                            alt="image"
                            className="min-h-60 max-h-60 w-auto h-auto"
                        />
                        <button
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                            onClick={() => handleDeleteImage(publicId)}
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
