import React from 'react';
import Card from './Card'; 
const CardsContainer = ({
  title,
  cards = [],
  className = '#000000',
  ...props
}) => {
  return (
    <section
      className={`w-full px-4 py-6 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-white text-xl font-bold mb-6">
          {title}
        </h2>
      )}

      {/* Card List */}
      <div className="flex flex-col gap-6">
        {cards.map((cardProps, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </div>
    </section>
  );
};

export default CardsContainer;
