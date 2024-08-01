'use client'
// NewProperties.jsx
import React, { useEffect } from 'react';
import PropertyCard from '../propertyCard/PropertyCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NewProperties({ data }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div ref={ref}          className='p-8 text-center flex flex-col gap-4 justify-center items-center bg-white text-black'
    >
     
        <h1 className='text-4xl'>احدث العقارات</h1>
        <div className='border-b-2 w-80'></div>
        <p>اطّلع على أحدث العقارات المعروضة في الإمارات</p>
        <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 max-w-screen-2xl gap-4'>
          {data.slice(0, 5).map((property) => (
            <PropertyCard property={property} key={property._id} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
