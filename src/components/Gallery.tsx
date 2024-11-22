import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    title: 'Global Investment'
  },
  {
    url: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80',
    title: 'Strategic Planning'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    title: 'Wealth Management'
  },
  {
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    title: 'Financial Success'
  }
];

export default function Gallery() {
  return (
    <div id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Global Presence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence in financial services across major financial hubs worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                  <button className="text-sm text-white underline opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}