import React from 'react';
import { DollarSign, Briefcase, BarChart, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'المبيعات',
    description: 'مساعدتك في العثور على المنزل المثالي بكل سهولة وثقة.',
    Icon: DollarSign, // Replaced with Lucide icon
  },
  {
    title: 'إدارة الممتلكات',
    description: 'تقديم خدمات إدارة احترافية لضمان الحفاظ على استثمارك العقاري',
    Icon: Briefcase, // Replaced with Lucide icon
  },
  {
    title: 'الاستشارات الاستثمارية',
    description: 'إرشادك من خلال الاستثمارات العقارية الاستراتيجية لتعظيم عوائدك وتأمين مستقبلك المالي',
    Icon: BarChart, // Replaced with Lucide icon
  },
  {
    title: 'تحليل السوق',
    description: 'تقديم رؤى واتجاهات متعمقة للسوق لمساعدتك على اتخاذ قرارات مستنيرة.',
    Icon: TrendingUp, // Replaced with Lucide icon
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
          <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
            <figure className="mb-4">
              <service.Icon size={48} className="text-blue-700 mb-2 transition-transform duration-200 transform hover:scale-105" />
            </figure>
            <h4 className="text-lg font-semibold mb-2 text-blue-700">
              <div>{service.title}</div>
            </h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
