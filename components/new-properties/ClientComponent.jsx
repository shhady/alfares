'use client'
import React, { useState, useEffect } from 'react';
import FilterComponent from './FilterComponent';
import { useSearchParams } from 'next/navigation'
import PropertyCard from '../propertyCard/PropertyCard';

const ClientComponent = ({ data }) => {
    const searchParams = useSearchParams()
      const [filteredProperties, setFilteredProperties] = useState(data);
      const propertiesType = searchParams.get('propertiesType');
      const location = searchParams.get('location');

      const deliveryDate = searchParams.get('deliveryDate');
  useEffect(() => {
    // const { propertiesType, location, deliveryDate } = router.query;

    // Initialize filterOptions based on URL parameters
    const initialFilterOptions = {
      propertiesType: propertiesType || '',
      location: location || '',
      deliveryDate: deliveryDate ? deliveryDate.toString() : '',
      minPrice: '',
      maxPrice: '',
      sortOption: '',
    };

    // Apply filters based on the initial filter options
    applyFilters(initialFilterOptions);
  }, [data, searchParams]);

  const applyFilters = (filterOptions) => {
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

  const handleFiltersUpdate = (newFilters) => {
    applyFilters(newFilters);
    
    // Update the URL query parameters
    const query = new URLSearchParams();
    if (newFilters.propertiesType) query.set('propertiesType', newFilters.propertiesType);
    if (newFilters.location) query.set('location', newFilters.location);
    if (newFilters.deliveryDate) query.set('deliveryDate', newFilters.deliveryDate);
    
    router.push(`/properties?${query.toString()}`, undefined, { shallow: true });
  };

  return (
    <div>
      <FilterComponent data={data} setFilteredProperties={setFilteredProperties} onFiltersUpdate={handleFiltersUpdate} />
      {/* Render filtered properties */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {filteredProperties.map(property => (
        <PropertyCard key={property._id} property={property} />
      ))}
      </div>
    </div>
  );
};

export default ClientComponent;
