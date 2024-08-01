// HeroFilter.js
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HeroFilter = ({ data }) => {
  const router = useRouter();
  const [filterOptions, setFilterOptions] = useState({
    propertiesType: '',
    location: '',
    deliveryDate: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const { propertiesType, location, deliveryDate } = filterOptions;

    // Create query parameters based on selected filters
    const query = new URLSearchParams();
    if (propertiesType) query.set('propertiesType', propertiesType);
    if (location) query.set('location', location);
    if (deliveryDate) query.set('deliveryDate', deliveryDate);

    // Navigate to the properties page with the query string
    router.push(`/properties?${query.toString()}`);
  };

  const uniqueOptions = (key) => {
    return [...new Set(data.map(item => item.generalInfo[key]))];
  };

  return (
    <div className="bg-white shadow rounded-md p-4 mb-4 text-black w-full lg:w-1/2">
      <div className="grid lg:grid-cols-3 gap-4 ">
        {/* Properties Type */}
        <div className="relative">
          <select
            name="propertiesType"
            value={filterOptions.propertiesType}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">نوع العقار</option>
            {uniqueOptions('propertiesType').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <select
            name="location"
            value={filterOptions.location}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">الموقع</option>
            {uniqueOptions('location').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Date */}
        <div className="relative">
          <select
            name="deliveryDate"
            value={filterOptions.deliveryDate}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">تاريخ التسليم</option>
            {uniqueOptions('deliveryDate').map((option, index) => (
              <option key={index} value={new Date(option).getFullYear()}>
                {new Date(option).getFullYear()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button  onClick={handleSearch} className=" w-full mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#303030,45%,white,55%,#303030)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    بحث
  </button>
     
    </div>
  );
};

export default HeroFilter;
