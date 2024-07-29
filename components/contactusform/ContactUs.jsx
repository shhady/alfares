'use client'
import React, { useState } from 'react';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    budget: '',
    ready: '',
    name: '',
    phone: '',
    email: '',
    how: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const newUser = await response.json();
      console.log('Form Data Submitted:', newUser);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };


  return (
    <div className='p-8 bg-white text-black'>
        <h1 className='text-4xl text-center'>إحجز شقة الآن</h1>
        <p  className='text-2xl text-center line-under-white'>املأ بياناتك وسنقوم بالرد عليك في أقرب وقت ممكن</p>
    <form onSubmit={handleSubmit} className="container mx-auto py-8 px-4 lg:px-0">
      <div className="grid lg:grid-cols-1 gap-4 justify-items-center items-end">
        <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <div className="mb-3 text-right">
            <label htmlFor="budget" className="text-black">ما هي ميزانية الاستثمار؟ <span className="required text-danger">*</span></label>
            <select name="budget" id="budget" required value={formData.budget} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200 ">
              <option value="">اختر</option>
              <option value="I don't have money">ليس لدي المال</option>
              <option value="30 thousand dollars">30 ألف دولار</option>
              <option value="50 thousand dollars">50 ألف دولار</option>
              <option value="100 thousand dollars">100 ألف دولار</option>
              <option value="200 thousand dollars">200 ألف دولار</option>
              <option value="500 thousand dollars">500 ألف دولار</option>
              <option value="1 million dollars">مليون دولار</option>
              <option value="More than 1 million dollars">اكثر من مليون دولار</option>
            </select>
          </div>
          <div className="mb-3 text-right">
            <label htmlFor="ready" className="text-black">هل انت جاهز لحجز العقار؟<span className="required text-danger">*</span></label>
            <select name="ready" id="ready" required value={formData.ready} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200">
              <option value="">اختر</option>
              <option value="Yes">نعم</option>
              <option value="No">لا</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <div className="mb-3 text-right">
            <label htmlFor="name" className="text-black">الاسم الكامل <span className="required text-danger">*</span></label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" />
          </div>
          <div className="mb-3 text-right">
            <label htmlFor="phone" className="text-black">رقم الهاتف <span className="required text-danger">*</span></label>
            <input type="number" name="phone" required value={formData.phone} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <div className="mb-3 text-right">
            <label htmlFor="email" className="text-black">البريد الإلكتروني <span className="required text-danger">*</span></label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" />
          </div>
          <div className="mb-3 text-right">
            <label htmlFor="how" className="text-black">كيف تعرف عنا؟<span className="required text-danger">*</span></label>
            <select name="how" id="how" required value={formData.how} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200">
              <option value="">اختر</option>
              <option value="Instagram">انستجرام</option>
              <option value="Tik Tok">تيكتوك</option>
              <option value="Facebook">فيسبوك</option>
              <option value="The YouTube">يوتيوب</option>
              <option value="Through a Friend">عن طريق صديق</option>
            </select>
          </div>
        </div>
        <div className="w-full max-w-screen-lg text-left">
          <button type="submit" className="btn btn-block btn-primary py-2 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">أرسل</button>
        </div>
      </div>
    </form>
    </div>
  );
}
