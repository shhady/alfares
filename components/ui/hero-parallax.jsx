"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [padding, setPadding] = useState("md:py-80 py-20");

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0) {
        setPadding("py-0 md:py-0");
      } else {
        setPadding("md:py-80 py-20");
      }
    });
  }, [scrollYProgress]);

  return (
<div ref={ref} className="relative flex flex-col self-auto h-[150vh] overflow-hidden antialiased">
  <div className={`absolute inset-0 bg-[url('/dubai-pic.jpg')] bg-cover bg-no-repeat bg-center ${windowWidth > 1004 ? `${padding === "md:py-80 py-20" ? 'h-[100vh]' : 'h-[150vh]'}` : 'h-[100vh]'}`}>
    <div className="bg-white bg-opacity-40 h-full w-full">

    
   {/* Other content goes here */}
    <Header padding={padding} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-20 mb-20 items-center gap-8">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} windowWidth={windowWidth} />
          ))}
        </motion.div>
        <motion.div className="flex flex-col md:flex-row md:space-x-20 mb-20 items-center gap-8">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} windowWidth={windowWidth} />
          ))}
        </motion.div>
      </motion.div>
      </div>  
      </div>
    </div>
  );
};

export const Header = ({ padding }) => {
  return (
    <div className={`max-w-7xl relative mx-auto px-2 w-full left-0 md:top-[-100px] top-[180px] text-center md:text-start ${padding} `}>
      {/* <h1 className="lg:text-4xl text-3xl font-semibold dark:text-white mb-10">استثمر مع عدي فارس</h1> */}
    <h2 className="lg:text-4xl text-3xl  font-semibold line-under">اكتشف فرص الاستثمار العقاري الرائدة في الإمارات</h2>
    <p className="lg:text-2xl text-2xl">
      استثمر في العقارات تحت الإنشاء وتمتع بعوائد استثنائية.
      <br/> انضم إلينا الآن وابدأ رحلة النجاح والاستثمار الذكي في سوق العقارات الإماراتي.
    </p>
   <Link href={'/contact'} className="absolute left-0 z-30 w-full m-auto p-2"><button  className=" w-full mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    تواصل معنا
  </button></Link> 
  
  </div>
  );
};

export const ProductCard = ({ product, translate, windowWidth }) => {
  const isMobile = windowWidth <= 1000;

  return (
    <motion.div
      style={{
        x: isMobile ? 0 : translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-full md:w-[30rem] relative flex-shrink-0 mb-6 md:mb-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
