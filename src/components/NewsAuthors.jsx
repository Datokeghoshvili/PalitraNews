import React from "react";

const authors = [
  {
    id: 1,
    name: "ლურჯი თოლია",
    avatar: "/images/author-image.png",
    stats: 180,
  },
  {
    id: 2,
    name: "ლურჯი თოლია",
    avatar: "/images/author-image.png",
    stats: 180,
  },
  {
    id: 3,
    name: "ლურჯი თოლია",
    avatar: "/images/author-image.png",
    stats: 180,
  },
  {
    id: 4,
    name: "ლურჯი თოლია",
    avatar: "/images/author-image.png",
    stats: 180,
  },
];

const NewAuthors = () => {
  return (
    <section className="mx-auto px-4 py-10 bg-#FFFFFF lg:mx-0 lg:px-[64px] lg:max-w-unset lg:pt-[94px] bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:pb-[64px]">
        {authors.map((author) => (
          <div
            key={author.id}
            className=" w-[161px] lg:w-full h-[169px] p-4 rounded-lg shadow-sm text-center flex flex-col items-center border border-rose-200
            lg:flex lg:justify-between lg:items-start lg:flex-row"
          >
            <img
              src={author.avatar}
              alt={`ავტორი ${author.name}`}
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {author.name}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                {author.stats} სტატია
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewAuthors;
