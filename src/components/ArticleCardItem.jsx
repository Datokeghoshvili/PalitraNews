import React from 'react';
import Card from './Card';

const ArticleCardItem = ({ title, image, author, date }) => {
  return (
    <Card className="w-[343px] p-0" image={null} title={null} description={null} author={null} date={null}>
      <div className="flex justify-between gap-4 p-4">
      
        <div className="flex flex-col flex-1 text-[#151515] font-inter text-[14px] leading-[23px]">
          <p className="mb-2">
            "{title}" –  – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",

          </p>

          {(author || date) && (
            <div className="flex items-center gap-2">
              {author?.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-[20px] h-[20px] rounded-full"
                />
              )}

              {/* Name and date in same row, with space between */}
<div className="flex justify-around items-center  text-xs text-[#737373]">
                {author?.name && <span>{author.name}</span>}
                {date && <span>{date}</span>}
              </div>
            </div>
          )}
        </div>

        {image && (
          <img
            src={image}
            alt="Article"
            className="w-[87px] h-[86px] object-cover rounded-md"
          />
        )}
      </div>
    </Card>
  );
};

export default ArticleCardItem;
