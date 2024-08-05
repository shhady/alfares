// HeroFilter.js
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeroFilter = ({ data }) => {
  const router = useRouter();
  const [filterOptions, setFilterOptions] = useState({
    propertiesType: '',
    location: '',
    developer: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const { propertiesType, location, developer } = filterOptions;
    const query = new URLSearchParams();
    if (propertiesType) query.set('propertiesType', propertiesType);
    if (location) query.set('location', location);
    if (developer) query.set('developer', developer);
    router.push(`/properties?${query.toString()}`);
  };

  const uniqueOptions = (key) => {
    return [...new Set(data.map(item => item.generalInfo[key]))];
  };

  return (
    <div className="bg-[#303030] shadow rounded-md p-4 mb-4 text-black w-full lg:w-1/2">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="relative">
          <select
            name="propertiesType"
            value={filterOptions.propertiesType}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#303030] text-white"
            data-fdprocessedid="propertiesType" // Ensuring this attribute is always present
          >
            <option value="">نوع العقار</option>
            {uniqueOptions('propertiesType').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            name="location"
            value={filterOptions.location}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#303030] text-white"
            data-fdprocessedid="location" // Ensuring this attribute is always present
          >
            <option value="">الموقع</option>
            {uniqueOptions('location').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            name="developer"
            value={filterOptions.developer}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#303030] text-white"
            data-fdprocessedid="developer" // Ensuring this attribute is always present
          >
            <option value="">المطور</option>
            {uniqueOptions('developer').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="w-full mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#9e8636,45%,white,55%,#9e8636)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        بحث
      </button>
    </div>
  );
};

export default HeroFilter;
