import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  image, 
  title, 
  description, 
  author, 
  date, 
  category,
  onClick,
  header,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-lg';
  const cardClasses = `${baseClasses} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {header && (
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">{header}</h2>
        </div>
      )}
      
      <div className="p-4">
        {category && (
          <div className="mb-3">
            <span className="inline-block bg-[#fafafa] text-[#1a1a1a] text-xs px-2 py-1 rounded border border-[#2e2e2e99]">
              {category}
            </span>
          </div>
        )}

        {image && (
          <div className="relative">
            <img 
              src={image} 
              alt={title || 'Card image'} 
              className="w-full h-[221px] object-cover rounded-t-lg"
            />
          </div>
        )}

        {title && (
          <h1 className="overflow-hidden text-[#B5B5B5] text-ellipsis text-[13px] font-normal leading-[18px] font-[var(--font-family-Font-1,Inter)]">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-[#737373] text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        {(author || date) && (
          <div className="flex items-center space-x-2">
            {author?.avatar && (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-6 h-6 rounded-full"
              />
            )}
            {author?.name && (
              <span className="text-[#2e2e2e] text-xs">
                {author.name}
              </span>
            )}
            {date && (
              <>
                <div className="w-1 h-1 bg-[#3a3a3a] rounded-full"></div>
                <span className="text-[#737373] text-xs">
                  {date}
                </span>
              </>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Card;
