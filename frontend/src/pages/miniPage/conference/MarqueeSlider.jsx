import React from 'react';

const cards = [
  { img: '/Sponsors/ZIRA.jpg', title: 'ZIRA d.o.o. Sarajevo',hasColor: true, bg: 'bg-[#151e47]', textColor: 'text-white'  },
  { img: '/Sponsors/Ginova.png', title: 'GEOINOVA d.o.o. Informatički inženjering' ,hasColor: false, textColor: 'text-primary'},
  { img: '/Sponsors/BHTelecom.jpg', title: 'BH Telecom dd Sarajevo', hasColor: true, bg: 'bg-[#ff8201]', textColor: 'text-white'},
  { img: '/Sponsors/ProCreditBank.png', title: 'ProCredit Bank', hasColor: false,textColor: 'text-primary' },
  { img: '/Sponsors/CLOUDIT.png', title: 'CloudIT d.o.o. Sarajevo', hasColor: false, textColor: 'text-primary'},
  { img: '/Sponsors/Ensmart.png', title: 'ENSMART d.o.o.', hasColor: true, bg: 'bg-[#54c2c1]', textColor: 'text-white'},
  { img: '/Sponsors/Imtec.png', title: 'IMTEC d.o.o. Sarajevo', hasColor: false, textColor: 'text-primary'}
];

const MarqueeSlider = () => {
  return (
      <div className="flex w-max space-x-8 animate-scrollSlow">
        {[...cards, ...cards, ...cards, ...cards].map((item, index) => (
          <div
            key={index}
            className={`w-64 flex-shrink-0 min-h-[300px] ${item.hasColor ? item.bg : 'bg-white'} rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:scale-105 transform `}>
            <div className="h-36 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className={`mt-6 text-center text-lg font-semibold ${item.textColor}`}>{item.title}</p>
          </div>
        ))}
      </div>

  );
};

export default MarqueeSlider;