'use client'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Carousel = () => {
  const controls = useAnimation();
    
  const carouselRef = React.useRef(null);
  const itemWidth = 300; // Set the width of each item
    const items =[]
  const startScrolling = () => {
    const scrollDistance = itemWidth * items.length;
    controls.start({
      x: `-${scrollDistance}px`,
      transition: {
        duration: scrollDistance / 100,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  React.useEffect(() => {
    startScrolling();
  }, [controls, items]);

  return (
    <div className="overflow-hidden max-w-screen-2xl m-auto " dir='ltr'>
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={controls}
        style={{ display: 'flex',gap:'20px', height: '40vh', padding: "20px", justifyContent:'center', alignItems:'center'}}
      >
        {items.map((item, index) => (
          <div key={index} className="bg-gradient-to-b from-slate-800 to-slate-900 w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] text-white min-h-[20vh] max-h-[20vh]"
         >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
