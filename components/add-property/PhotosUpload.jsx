'use client';
import { useEffect, useState } from 'react';
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

export default function PhotosUpload({ setImagesArray, imagesArray }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleResetErrorAndSuccess = () => {
        setError(null);
        setSuccessMessage(null);
    };
    useEffect(()=>{
        if(imagesArray.length > 0) {
            setImages(imagesArray)
        }
    },[imagesArray])
    
    const handleDeleteImage = async (publicId) => {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
        const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
        const timestamp = Math.floor(Date.now() / 1000);
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

            if (data.result === 'ok') {
                setImages((prevImages) => {
                    const updatedImages = prevImages.filter((image) => image.public_id !== publicId);
                    console.log(updatedImages);
                    setImagesArray(updatedImages);
                    return updatedImages;
                });
                setSuccessMessage('Image deleted successfully');
            } else {
                setError('Failed to delete image from Cloudinary');
            }
        } catch (error) {
            setError('Failed to delete image');
            console.error(error);
        }
    };

    const handleUploadSuccess = (results) => {
        const newImage = {
            public_id: results.info.public_id,
            secure_url: results.info.secure_url
        };
        setImages((prevImages) => {
            const updatedImages = [...prevImages, newImage];
            setImagesArray(updatedImages);
            return updatedImages;
        });
    };

    return (
        <>
            <CldUploadButton
                uploadPreset="alfares"
                className="bg-lime-800 w-full rounded-lg p-2 max-w-screen-lg"
                onSuccess={handleUploadSuccess}
                onClick={handleResetErrorAndSuccess}
            >
                ارفع الصور
            </CldUploadButton>

            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <div className="flex flex-wrap w-full gap-2 justify-center items-center">
                {images.map((image) => (
                    <div key={image.public_id} className="relative">
                        <CldImage
                            width="180"
                            height="400"
                            src={image.secure_url}
                            sizes="100vw"
                            alt="image"
                            
                            className="min-h-60 max-h-60 w-auto h-auto"
                        />
                        <button
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                            onClick={() => handleDeleteImage(image.public_id)}
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
