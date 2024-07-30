import React from 'react';

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
            <img
              src={box.imgSrc}
              alt={box.title}
              className="w-16 h-16 mb-4 object-contain"
            />
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
    imgSrc: 'https://img.icons8.com/ios/50/popular-man.png', // Replace with your image URL
  },
  {
    title: 'الشراكة',
    description: 'نؤمن بقوة الشراكة، ونعمل بشكل وثيق مع عملائنا لتحقيق أهدافهم، مما يضمن النجاح المستدام.',
    imgSrc: 'https://img.icons8.com/ios/100/handshake--v1.png', // Replace with your image URL
  },
  {
    title: 'الإبتكار',
    description: 'نستخدم أحدث التقنيات وأفضل الممارسات لضمان تقديم حلول مبتكرة تلبي احتياجات السوق المتغيرة.',
    imgSrc: 'https://img.icons8.com/windows/64/profitable-idea.png', // Replace with your image URL
  },
];

export default WhyChooseUs;
