import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">من نحن</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        نحن في شركة [اسم الشركة] نؤمن بأن العقارات ليست مجرد مباني، بل هي فرص لإحداث تأثير إيجابي في حياة الناس.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:w-1/2 min-h-48">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">رؤيتنا</h2>
          <p className="text-gray-600">
            نسعى لتوفير بيئة عمل مبتكرة تدفعنا لتقديم أفضل الحلول العقارية لعملائنا، مما يساعدهم على اتخاذ قرارات مدروسة تعزز استثماراتهم.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 min-h-48">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">مهمتنا</h2>
          <p className="text-gray-600">
            مهمتنا هي تمكين عملائنا من الوصول إلى فرص استثمارية ممتازة من خلال تقديم استشارات عقارية موثوقة ومهنية.
          </p>
        </div>
      </div>
      {/* <div className="text-center mt-8">
        <a
          href="#learn-more"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
        >
          اعرف المزيد
        </a>
      </div> */}
    </div>
  );
};

export default WhoWeAre;
