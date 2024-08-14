import React from 'react';
import { Award, Handshake, Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="p-8 text-black">
      <h3 className="text-center text-3xl mb-4">لماذا تختارنا</h3>
      <p className="text-center mb-8">
        نحن نقدم خدمات متكاملة واحترافية لضمان تحقيق أفضل النتائج لعملائنا.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {iconBoxes.map((box, index) => (
          <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
            <box.Icon size={64} className="text-blue-700 mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-blue-700">
              {box.title}
            </h4>
            <p>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const iconBoxes = [
  {
    title: 'الاحترافية',
    description: 'نحن نلتزم بأعلى معايير الاحترافية في جميع جوانب خدماتنا، مما يضمن تقديم تجربة سلسة وفعالة لعملائنا.',
    Icon: Award, // Replaced with Lucide icon
  },
  {
    title: 'الشراكة',
    description: 'نؤمن بقوة الشراكة، ونعمل بشكل وثيق مع عملائنا لتحقيق أهدافهم، مما يضمن النجاح المستدام.',
    Icon: Handshake, // Replaced with Lucide icon
  },
  {
    title: 'الإبتكار',
    description: 'نستخدم أحدث التقنيات وأفضل الممارسات لضمان تقديم حلول مبتكرة تلبي احتياجات السوق المتغيرة.',
    Icon: Lightbulb, // Replaced with Lucide icon
  },
];

export default WhyChooseUs;
