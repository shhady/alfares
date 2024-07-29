import React from 'react';

const services = [
  {
    title: 'المبيعات',
    description: 'مساعدتك في العثور على المنزل المثالي بكل سهولة وثقة.',
    imgSrc: 'https://willandrich.ae/storage/2024/06/Artboard-1-copy-2-150x150.jpg',
    link: '#',
  },
  {
    title: 'إدارة الممتلكات',
    description: 'تقديم خدمات إدارة احترافية لضمان الحفاظ على استثمارك العقاري',
    imgSrc: 'https://willandrich.ae/storage/2024/06/Artboard-1-150x150.jpg',
    link: '#',
  },
  {
    title: 'الاستشارات الاستثمارية',
    description: 'إرشادك من خلال الاستثمارات العقارية الاستراتيجية لتعظيم عوائدك وتأمين مستقبلك المالي',
    imgSrc: 'https://willandrich.ae/storage/2024/06/Artboard-1-copy-3-150x150.jpg',
    link: '#',
  },
  {
    title: 'تحليل السوق',
    description: 'تقديم رؤى واتجاهات متعمقة للسوق لمساعدتك على اتخاذ قرارات مستنيرة.',
    imgSrc: 'https://willandrich.ae/storage/2024/06/Artboard-1-copy-150x150.jpg',
    link: '#',
  },
];

const Services = () => {
  return (
    <div className="p-8 text-black">
      <h3 className="text-center text-3xl mb-4">خدماتنا</h3>
      <p className="text-center mb-8">
        نقدم الخدمات العقارية المصممة خصيصاً لتلبية الاحتياجات المتنوعة لعملائنا.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
            <figure className="mb-4">
              <a href={service.link} tabIndex="-1">
                <img
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="150"
                  src={service.imgSrc}
                  alt={service.title}
                  className="transition-transform duration-200 transform hover:scale-105"
                />
              </a>
            </figure>
            <h4 className="text-lg font-semibold mb-2">
              <a href={service.link}>{service.title}</a>
            </h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
