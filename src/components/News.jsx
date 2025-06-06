const NewsCards = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-[2rem] bg-white lg:p-[64px]">
      <article
        className="relative w-[250px] h-[441px]  mx-auto flex flex-col justify-end items-start bg-white overflow-hidden rounded-lg 
        shadow-md  row-span-2 col-span-2 lg:w-full lg:h-[656px]"
        aria-label="Featured Article"
      >
        <figure className="absolute inset-0 w-full h-full">
          <img
            src="/images/news.png"
            alt="ჟირაფის ფოტო – ვინ იყო ვახტანგ გორგასლის დედა?"
            className="w-full h-full object-cover"
          />
        </figure>

        <section className="relative z-10 w-full p-4 bg-black/60 text-white">
          <h2 className="text-lg font-bold mb-2">
            ვინ იყო ვახტანგ გორგასლის დედა?
          </h2>
          <div className="flex items-center justify-between text-[12px] opacity-80">
            <span>
              <strong>18,000</strong> ნახვა
            </span>
            <time dateTime="2025-06-01">3 წუთის საკკითხავი</time>
          </div>

          <div className="mt-4 w-full flex justify-center" aria-hidden="true">
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
        </section>
      </article>
      <article
        className="relative w-[250px] h-[441px]  mx-auto flex-col justify-end items-start background: #FFF; overflow-hidden rounded-lg shadow-md
        hidden lg:flex lg:w-full lg:h-full"
        aria-label="Featured Article"
      >
        <figure className="absolute inset-0 w-full h-full">
          <img
            src="/images/news.png"
            alt="ჟირაფის ფოტო – ვინ იყო ვახტანგ გორგასლის დედა?"
            className="w-full h-full object-cover"
          />
        </figure>

        <section className="relative z-10 w-full p-4 bg-black/60 text-white ">
          <h2 className="text-lg font-bold mb-2">
            ვინ იყო ვახტანგ გორგასლის დედა?
          </h2>
          <div className="flex items-center justify-between text-[12px] opacity-80">
            <span>
              <strong>18,000</strong> ნახვა
            </span>
            <time dateTime="2025-06-01">3 წუთის საკკითხავი</time>
          </div>

          <div className="mt-4 w-full flex justify-center" aria-hidden="true">
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
        </section>
      </article>
      <article
        className="relative w-[250px] h-[441px]  mx-auto  flex-col justify-end items-start background: #FFF; overflow-hidden 
        rounded-lg shadow-md hidden lg:flex lg:w-full lg:h-full"
        aria-label="Featured Article"
      >
        <figure className="absolute inset-0 w-full h-full">
          <img
            src="/images/news.png"
            alt="ჟირაფის ფოტო – ვინ იყო ვახტანგ გორგასლის დედა?"
            className="w-full h-full object-cover"
          />
        </figure>

        <section className="relative z-10 w-full p-4 bg-black/60 text-white">
          <h2 className="text-lg font-bold mb-2">
            ვინ იყო ვახტანგ გორგასლის დედა?
          </h2>
          <div className="flex items-center justify-between text-[12px] opacity-80">
            <span>
              <strong>18,000</strong> ნახვა
            </span>
            <time dateTime="2025-06-01">3 წუთის საკკითხავი</time>
          </div>

          <div className="mt-4 w-full flex justify-center" aria-hidden="true">
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default NewsCards;
