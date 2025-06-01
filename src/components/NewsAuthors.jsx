import React from 'react';

const authors = [
  {
    id: 1,
    name: 'ლურჯი თოლია',
    avatar: '/images/author-image.png',
    stats: 180
  },
  {
    id: 2,
    name: 'ლურჯი თოლია',
    avatar: '/images/author-image.png',
    stats: 180
  },
  {
    id: 3,
    name: 'ლურჯი თოლია',
    avatar: '/images/author-image.png',
    stats: 180
  },
  {
    id: 4,
    name: 'ლურჯი თოლია',
    avatar: '/images/author-image.png',
    stats: 180
  }
];

const NewAuthors = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-#FFFFFF">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {authors.map((author) => (
          <div
            key={author.id}
            className=" w-[161px] h-[169px]bg-rose-100 p-4 rounded-lg shadow-sm text-center flex flex-col items-center border border-rose-200"
          >
            <img
              src={author.avatar}
              alt={`ავტორი ${author.name}`}
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <p className="text-lg font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              {author.stats} სტატია
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewAuthors;
