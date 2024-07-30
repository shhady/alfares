'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterComponent = ({ data, setFilteredProperties }) => {
  const [filterOptions, setFilterOptions] = useState({
    propertiesType: '',
    location: '',
    deliveryDate: '',
    minPrice: '',
    maxPrice: '',
    sortOption: '',
  });

  const [isAccordionOpen, setIsAccordionOpen] = useState({
    propertiesType: false,
    location: false,
    deliveryDate: false,
    minPrice: false,
    maxPrice: false,
  });

  useEffect(() => {
    applyFilters();
  }, [filterOptions]);

  const applyFilters = () => {
    let filtered = [...data];

    if (filterOptions.propertiesType) {
      filtered = filtered.filter(property => property.generalInfo.propertiesType === filterOptions.propertiesType);
    }

    if (filterOptions.location) {
      filtered = filtered.filter(property => property.generalInfo.location === filterOptions.location);
    }

    if (filterOptions.deliveryDate) {
      filtered = filtered.filter(property => new Date(property.generalInfo.deliveryDate).getFullYear() === parseInt(filterOptions.deliveryDate));
    }

    if (filterOptions.minPrice) {
      filtered = filtered.filter(property => parseFloat(property.generalInfo.minPrice) >= parseFloat(filterOptions.minPrice));
    }

    if (filterOptions.maxPrice) {
      filtered = filtered.filter(property => parseFloat(property.generalInfo.maxPrice) <= parseFloat(filterOptions.maxPrice));
    }

    // Sorting Logic
    if (filterOptions.sortOption) {
      if (filterOptions.sortOption === 'priceAsc') {
        filtered.sort((a, b) => parseFloat(a.generalInfo.minPrice) - parseFloat(b.generalInfo.minPrice));
      } else if (filterOptions.sortOption === 'priceDesc') {
        filtered.sort((a, b) => parseFloat(b.generalInfo.minPrice) - parseFloat(a.generalInfo.minPrice));
      } else if (filterOptions.sortOption === 'newest') {
        filtered.sort((a, b) => new Date(b.generalInfo.createdAt) - new Date(a.generalInfo.createdAt));
      }
    }

    setFilteredProperties(filtered);
  };

  const uniqueOptions = (key) => {
    return [...new Set(data.map(item => item.generalInfo[key]))];
  };

  const handleFilterChange = (name, value) => {
    const updatedOptions = {
      ...filterOptions,
      [name]: value,
    };

    setFilterOptions(updatedOptions);
    applyFilters(); // Apply filters immediately when changing options

    // Close the accordion after selection
    setIsAccordionOpen(prevState => ({
      ...prevState,
      [name]: false,
    }));
  };

  const toggleAccordion = (section) => {
    setIsAccordionOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const resetFilters = () => {
    setFilterOptions({
      propertiesType: '',
      location: '',
      deliveryDate: '',
      minPrice: '',
      maxPrice: '',
      sortOption: '',
    });
    setFilteredProperties(data); // Reset filtered properties to original data
  };

  return (
    <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="grid lg:grid-cols-6 gap-4">
        {/* Properties Type */}
        <div className="relative">
          <button onClick={() => toggleAccordion('propertiesType')} className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <span>{filterOptions.propertiesType || 'Property Type'}</span>
            {isAccordionOpen.propertiesType ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isAccordionOpen.propertiesType && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 w-full max-h-48 overflow-y-auto">
              {uniqueOptions('propertiesType').map((option, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleFilterChange('propertiesType', option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="relative">
          <button onClick={() => toggleAccordion('location')} className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <span>{filterOptions.location || 'Location'}</span>
            {isAccordionOpen.location ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isAccordionOpen.location && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 w-full max-h-48 overflow-y-auto">
              {uniqueOptions('location').map((option, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleFilterChange('location', option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Delivery Date */}
        <div className="relative">
          <button onClick={() => toggleAccordion('deliveryDate')} className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <span>{filterOptions.deliveryDate || 'Delivery Date'}</span>
            {isAccordionOpen.deliveryDate ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isAccordionOpen.deliveryDate && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 w-full max-h-48 overflow-y-auto">
              {uniqueOptions('deliveryDate').map((option, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleFilterChange('deliveryDate', new Date(option).getFullYear())}>
                  {new Date(option).getFullYear()}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sort Option */}
        <div className="relative">
          <button onClick={() => toggleAccordion('sortOption')} className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <span>{filterOptions.sortOption ? (filterOptions.sortOption === 'priceAsc' ? 'Price: Low to High' : filterOptions.sortOption === 'priceDesc' ? 'Price: High to Low' : 'Newest') : 'Sort By'}</span>
            {isAccordionOpen.sortOption ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isAccordionOpen.sortOption && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 w-full max-h-48 overflow-y-auto">
              {['priceAsc', 'priceDesc', 'newest'].map((option, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleFilterChange('sortOption', option)}>
                  {option === 'priceAsc' ? 'Price: Low to High' : option === 'priceDesc' ? 'Price: High to Low' : 'Newest'}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <button onClick={resetFilters} className="p-2 bg-blue-500 text-white rounded-md">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
