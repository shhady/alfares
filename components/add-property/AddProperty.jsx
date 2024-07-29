'use client';
import React, { useState } from 'react';
import { createProperty } from '@/app/api/properties/add-property/route';
import PhotosUpload from './PhotosUpload';

export default function AddProperty() {
  const [formData, setFormData] = useState({
    generalInfo: {
      name:'',
      location: '',
      minPrice: '',
      maxPrice: '',
      propertiesType: '',
      developer: '',
      deliveryDate: '',
      Readiness:""
    },
    description: '',
    architecturalDesign: {
      totalArea: '',
      totalBuiltArea: '',
    },
    location: {
      description: '',
    },
    prices: {
      studio: '',
      oneBedroom: '',
      twoBedroom: '',
      threeBedroom: '',
    },
    images:[],
    paymentPlan: '',
    strengths: '',
    features: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const keys = name.split('.');
      if (keys.length > 1) {
        return {
          ...prevState,
          [keys[0]]: {
            ...prevState[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  const handleImagesArray = (imagesArray) => {
    setFormData((prevState) => ({
      ...prevState,
      images: imagesArray
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/properties/add-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const newProperty = await response.json();
      console.log('Form Data Submitted:', newProperty);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="container mx-auto p-8  ">
        <div className="grid lg:grid-cols-1 gap-4 justify-items-center items-end">
        <div className="mb-3 text-right w-full max-w-screen-lg">
              <label htmlFor="generalInfo.name" className="text-white">الاسم</label>
              <input type="text" name="generalInfo.name" required value={formData.generalInfo.name} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          {/* General Info */}
          <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
         
          <div className="mb-3 text-right">
              <label htmlFor="generalInfo.developer" className="text-white">المطور العقاري</label>
              <input type="text" name="generalInfo.developer" required value={formData.generalInfo.developer} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.location" className="text-white">الموقع</label>
              <input type="text" name="generalInfo.location" required value={formData.generalInfo.location} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className=" gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="location.description" className="text-white">وصف الموقع</label>
              <input type="text" name="location.description" required value={formData.location.description} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
           
          </div>
            <div className="mb-3 text-right grid grid-cols-2 gap-4">
            <div className="mb-3 text-right">
  <label htmlFor="generalInfo.minPrice" className="text-white">أقل سعر</label>
  <input type="text" name="generalInfo.minPrice" required value={formData.generalInfo.minPrice} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
</div>
<div className="mb-3 text-right">
  <label htmlFor="generalInfo.maxPrice" className="text-white">أعلى سعر</label>
  <input type="text" name="generalInfo.maxPrice" required value={formData.generalInfo.maxPrice} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
</div>
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.propertiesType" className="text-white">نوع العقار</label>
              <input type="text" name="generalInfo.propertiesType" required value={formData.generalInfo.propertiesType} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>

            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.Readiness" className="text-white">الجهوزية</label>
              <input type="text" name="generalInfo.Readiness" required value={formData.generalInfo.Readiness} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
         
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.deliveryDate" className="text-white">التسليم</label>
              <input type="text" name="generalInfo.deliveryDate" required value={formData.generalInfo.deliveryDate} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="description" className="text-white">وصف العقار</label>
            <textarea name="description" required value={formData.description} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2"></textarea>
          </div>

          {/* Architectural Design */}
          <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="architecturalDesign.totalArea" className="text-white">المساحة الكلية</label>
              <input type="text" name="architecturalDesign.totalArea" required value={formData.architecturalDesign.totalArea} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
           
            <div className="mb-3 text-right">
              <label htmlFor="architecturalDesign.totalBuiltArea" className="text-white">مساحة البناء</label>
              <input type="text" name="architecturalDesign.totalBuiltArea" required value={formData.architecturalDesign.totalBuiltArea} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div>

          {/* Prices */}
          <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="prices.studio" className="text-white">سعر استوديو</label>
              <input type="text" name="prices.studio" required value={formData.prices.studio} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.oneBedroom" className="text-white">سعر غرفة وصالة</label>
              <input type="text" name="prices.oneBedroom" required value={formData.prices.oneBedroom} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.twoBedroom" className="text-white">سعر غرفتين وصالة</label>
              <input type="text" name="prices.twoBedroom" required value={formData.prices.twoBedroom} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.threeBedroom" className="text-white">سعر ثلاث غرف وصالة</label>
              <input type="text" name="prices.threeBedroom" required value={formData.prices.threeBedroom} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div>

          {/* Payment Plan */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="paymentPlan" className="text-white">خطة الدفع</label>
            <input type="text" name="paymentPlan" required value={formData.paymentPlan} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
          </div>

          {/* Strengths */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="strengths" className="text-white">نقاط القوة</label>
            <input type="text" name="strengths" required value={formData.strengths} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
          </div>

          {/* Features */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="features" className="text-white">الميزات</label>
            <textarea name="features" required value={formData.features} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2"></textarea>
          </div>
          <PhotosUpload setImagesArray={handleImagesArray} />
          <div className="w-full max-w-screen-lg text-left">
            <button type="submit" className="btn btn-block btn-primary py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
