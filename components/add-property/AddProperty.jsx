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
      readiness:""
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
    <div className='bg-white'>
      <form onSubmit={handleSubmit} className="container mx-auto p-8  ">
      <h1 className='text-2xl font-bold mb-8'>اضف مشروع</h1>

        <div className="grid lg:grid-cols-1 gap-4 justify-items-center items-end">
        <div className="mb-3 text-right w-full max-w-screen-lg">
              <label htmlFor="generalInfo.name" >الاسم</label>
              <input id="generalInfo.name" type="text" name="generalInfo.name" value={formData.generalInfo.name} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          {/* General Info */}
          <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
         
          <div className="mb-3 text-right">
              <label htmlFor="generalInfo.developer" >المطور العقاري</label>
              <input id="generalInfo.developer" type="text" name="generalInfo.developer" value={formData.generalInfo.developer} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.location" >الموقع</label>
              <input id="generalInfo.location" type="text" name="generalInfo.location" value={formData.generalInfo.location} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            {/* <div className=" gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="location.description" >وصف الموقع</label>
              <input id="generalInfo.description" type="text" name="location.description" value={formData.location.description} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
           
          </div> */}
            {/* <div className="mb-3 text-right grid grid-cols-2 gap-4"> */}
            <div className="mb-3 text-right">
  <label htmlFor="generalInfo.minPrice" >ابتداءً من</label>
  <input id="generalInfo.minPrice"  type="text" name="generalInfo.minPrice" value={formData.generalInfo.minPrice} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
</div>
{/* <div className="mb-3 text-right">
  <label htmlFor="generalInfo.maxPrice" >أعلى سعر</label>
  <input id="generalInfo.maxPrice" type="text" name="generalInfo.maxPrice" value={formData.generalInfo.maxPrice} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
</div> */}
            {/* </div> */}
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.propertiesType" >نوع العقار</label>
              <input id="generalInfo.propertiesType" type="text" name="generalInfo.propertiesType" value={formData.generalInfo.propertiesType} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>

            {/* <div className="mb-3 text-right">
              <label htmlFor="generalInfo.readiness" >الجهوزية</label>
              <input  id="generalInfo.readiness" type="text" name="generalInfo.readiness" value={formData.generalInfo.readiness} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          */}
            <div className="mb-3 text-right">
              <label htmlFor="generalInfo.deliveryDate" >التسليم</label>
              <input id="generalInfo.deliveryDate" type="text" name="generalInfo.deliveryDate" value={formData.generalInfo.deliveryDate} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="description" >وصف العقار</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2"></textarea>
          </div>

          {/* Architectural Design */}
          {/* <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="architecturalDesign.totalArea" >المساحة الكلية</label>
              <input id="architecturalDesign.totalArea" type="text" name="architecturalDesign.totalArea" value={formData.architecturalDesign.totalArea} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div> */}
           
            {/* <div className="mb-3 text-right">
              <label htmlFor="architecturalDesign.totalBuiltArea" >مساحة البناء</label>
              <input id="architecturalDesign.totalBuiltArea" type="text" name="architecturalDesign.totalBuiltArea" value={formData.architecturalDesign.totalBuiltArea} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div> */}

          {/* Prices */}
          {/* <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="mb-3 text-right">
              <label htmlFor="prices.studio" >سعر استوديو</label>
              <input id="prices.studio" type="text" name="prices.studio" value={formData.prices.studio} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.oneBedroom" >سعر غرفة وصالة</label>
              <input id="prices.oneBedroom" type="text" name="prices.oneBedroom" value={formData.prices.oneBedroom} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.twoBedroom" >سعر غرفتين وصالة</label>
              <input id="prices.twoBedroom" type="text" name="prices.twoBedroom" value={formData.prices.twoBedroom} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="prices.threeBedroom" >سعر ثلاث غرف وصالة</label>
              <input  id="prices.threeBedroom" type="text" name="prices.threeBedroom" value={formData.prices.threeBedroom} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
            </div>
          </div> */}

          {/* Payment Plan */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="paymentPlan" >خطة الدفع</label>
            <input id="paymentPlan" type="text" name="paymentPlan" value={formData.paymentPlan} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
          </div>

          {/* Strengths */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="strengths" >نقاط القوة</label>
            <input placeholder='مثلاً, موقع استراتيجي متميز على شارع الشيخ زايد في الخليج التجاري، دبي/تصميم معماري فريد وأنيق مع 60 طابقاً وإطلالات بانورامية خلابة.' type="text" name="strengths" value={formData.strengths} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2" />
          </div>

          {/* Features */}
          <div className="w-full max-w-screen-lg mb-3 text-right">
            <label htmlFor="features" >الميزات</label>
            <textarea placeholder='إنذار حريق , تكييف ,ساونا , جيم , حدائق , شرفة'



 id="features" name="features" value={formData.features} onChange={handleChange} className="form-control bg-gray-200 border-b-2 border-black mt-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2"></textarea>
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

