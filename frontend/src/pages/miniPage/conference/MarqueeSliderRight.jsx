import React from 'react';

const partners = [
  { img: '/Friends/BitAliance.png', title: 'Bit Alliance', hasColor: false, textColor: 'text-primary' },
  { img: '/Friends/irpo.jpg', title: 'Institut za razvoj preduniverzitetskog obrazovanja', hasColor: false, textColor: 'text-primary' },
  { img: '/Friends/Richmond.png', title: 'Richmond park school', hasColor: true, bg: 'bg-[#287079]', textColor: 'text-white' },
  { img: '/Friends/Masinski.png', title: 'Mašinski fakultet Sarajevo', hasColor: false, textColor: 'text-primary' },
  { img: '/Friends/monks.png', title: 'Ministarstvo za odgoj i obrazovanje Kantona Sarajevo', hasColor: false, textColor: 'text-primary' },
  { img: '/Friends/pitBa.png', title: 'Proizvodnja, industrija, tehnologija PIT.BA', hasColor: false, textColor: 'text-primary' },
];

const MarqueeSliderRight = () => {
  return (
    <div className='relative w-screen overflow-hidden px-0 m-0' >
      <div className="flex w-max space-x-8 mb-10 animate-scrollReverseSlow">
        {[...partners, ...partners, ...partners, ...partners].map((item, index) => (
          <div
            key={index}
            className={`w-64 flex-shrink-0 ${item.hasColor ? item.bg : 'bg-white'} 
              rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:scale-105 transform`}>
            <div className="h-36 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className={`mt-6 text-center text-lg font-semibold ${item.textColor}`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>    
  );
};

export default MarqueeSliderRight;
