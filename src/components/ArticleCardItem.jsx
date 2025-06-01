import React from "react";
import Card from "./Card";

const ArticleCardItem = ({ title, image, author, date }) => {
  return (
    <Card className="w-full max-w-[343px] lg:max-w-[424px] p-0">
      <div className="flex justify-between gap-4 p-4 lg:grid lg:grid-row-2">
        {/* Left: Image for lg and up */}
        {image && (
          <img
            src={image}
            alt="Article"
            className="hidden lg:block w-full h-[221px] object-cover rounded-md"
          />
        )}

        {/* Right: Text Content */}
        <div className="flex flex-col justify-between text-[#151515] font-inter text-[14px] leading-[23px]">
          {/* Title */}
          <p className="mb-2">
            "{title}" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          </p>

          {/* Author and Date */}
          {(author || date) && (
            <div className="flex items-center gap-2">
              {author?.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-5 h-5 rounded-full"
                />
              )}
              <div className="flex justify-around items-center text-xs text-[#737373] gap-2">
                {author?.name && <span>{author.name}</span>}
                {date && <span>{date}</span>}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Image */}
        {image && (
          <img
            src={image}
            alt="Article"
            className="w-[87px] h-[86px] object-cover rounded-md lg:hidden"
          />
        )}
      </div>
    </Card>
  );
};

export default ArticleCardItem;
