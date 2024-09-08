import React from 'react';

const articles = [
  {
    source: 'AlMadar Magazine',
    title: 'عدي فارس "نسر العقارات" يحلق في عالم الاستثمار العقاري',
    image: '/blog-2.png', // Replace with correct image
    excerpt: 'عدي فارس خبير في مجال الاستثمار العقاري...',
    link: 'https://www.almadarmagazine.ae/2024/08/23/%D8%B9%D8%AF%D9%8A-%D9%81%D8%A7%D8%B1%D8%B3-%D9%86%D8%B3%D8%B1-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D9%8A%D8%AD%D9%84%D9%82-%D9%81%D9%8A-%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%A7/',
  },
  {
    source: 'UAE News247',
    title: 'Ady Fares, “The Eagle of Real Estate” soars in the world of real estate investment',
    image: '/blog-1.png', // Replace with correct image
    excerpt: 'Ady Fares is an expert in the field of real estate investment...',
    link: 'https://uaenews247.com/2024/08/25/ady-fares-the-eagle-of-real-estate-soars-in-the-world-of-real-estate-investment',
  },
  {
    source: 'UAE News 4U',
    title: 'Ady Fares, “The Eagle of Real Estate” soars in the world of real estate investment',
    image: '/blog-1.png', // Replace with correct image
    excerpt: 'Ady Fares is a real estate expert with deep roots in the industry...',
    link: 'https://uaenews4u.com/2024/08/25/ady-fares-the-eagle-of-real-estate-soars-in-the-world-of-real-estate-investment',
  },
  {
    source: 'Merimedia',
    title: 'عدي فارس "نسر العقارات" يقدم خدمات استشارية متخصصة',
    image: '/blog-3.png', // Replace with correct image
    excerpt: 'يتمتع عدي فارس بخبرة عميقة في مجال الاستثمار العقاري...',
    link: 'https://www.merimedia.net/2024/08/27/%d8%b9%d8%af%d9%8a-%d9%81%d8%a7%d8%b1%d8%b3-%d9%86%d8%b3%d8%b1-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d8%a7%d8%aa-%d9%8a%d9%82%d8%af%d9%85-%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%b4/ ',
  },
  {
    source: 'Merimedia (EN)',
    title: 'Ady Faris, “Eagle of Real Estate” Provides Specialized Consulting Services in Real Estate Investment',
    image: '/blog-3.png', // Replace with correct image
    excerpt: 'Ady Fares, known as the "Eagle of Real Estate," continues to offer...',
    link: 'https://www.merimedia.net/en/2024/08/27/ady-faris-eagle-of-real-estate-provides-specialized-consulting-services-in-real-estate-investment/',
  },
  {
    source: 'Pardais News',
    title: 'Ady Fares: Real Estate Soars',
    image: '/blog-3.png', // Replace with correct image
    excerpt: 'Ady Fares continues to establish himself in the real estate sector...',
    link: 'https://pardaisnews.com/?p=11610',
  }
];

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-6">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-48 object-cover"
          src={article.image}
          alt={article.title}
        />
        <div className="px-6 py-4">
          <h2 className="text-sm font-semibold text-gray-500">
            {article.source}
          </h2>
          <h3 className="text-lg font-bold text-gray-800">
            {article.title}
          </h3>
          <p className="text-gray-700 text-base">
            {article.excerpt.substring(0, 100)}...
          </p>
        </div>
      </a>
    </div>
  );
};

const ArticlesList = () => {
  return (
    <div>
      <h1 className='text-center text-2xl p-4 font-semibold'>مقالات</h1>
<div className="container mx-auto flex flex-wrap justify-center ">
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </div>
    </div>
    
  );
};

export default ArticlesList;
