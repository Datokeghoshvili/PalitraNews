import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ReportCard from "./components/RepoertCard";
import ArticleCardItem from "./components/ArticleCardItem";
import CardsContainer from "./components/CardsContainer";
import NewsCards from "./components/News";
import NewsAuthots from "./components/NewsAuthors";
import Footer from "./components/footer";

function App() {
  const articles = [
    {
      id: 1,
      type: "card",
      header:
        "„ბოდიოიდები“ –  ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/img_image_279x642.png",
      description:
        "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 2,
      type: "card",
      header:
        "„ბოდიოიდები“ –  ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/ship.png",
      description:
        "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 3,
      type: "card",
      header:
        "„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/ship.png",

      description:
        "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 4,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 4,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 4,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 5,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 6,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
    {
      id: 7,
      type: "articleCardItem",
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png",
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40",
    },
  ];
  const cardsData = [
    // {
    //   image: "/images/astronaut.png",
    //   title:
    //     '"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები',
    //   description:
    //     "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ.",

    //   category: "კოსმოსი",
    // },
    {
      image: "/images/rocket.png",
      title: "მშენებლობა შეჩერდა კოსმოსში, რაც შესაძლოა დიდი დარტყმა იყოს",
      description:
        'პროექტი "ტიტან IX" აღმოჩნდა დაუგეგმავი შეფერხების წინაშე...',
      author: {
        name: "ლურჯი თოლია",
        avatar: "/images/img_image_24x24.png",
      },
      date: "18:40",
      category: "კოსმოსი",
    },
    {
      image: "/images/rocket.png",
      title: "მშენებლობა შეჩერდა კოსმოსში, რაც შესაძლოა დიდი დარტყმა იყოს",
      description:
        'პროექტი "ტიტან IX" აღმოჩნდა დაუგეგმავი შეფერხების წინაშე...',
      author: {
        name: "ლურჯი თოლია",

        avatar: "/images/img_image_24x24.png",
      },
      date: "18:40",
      category: "კოსმოსი",
    },
    {
      image: "/images/rocket.png",
      title: "მშენებლობა შეჩერდა კოსმოსში, რაც შესაძლოა დიდი დარტყმა იყოს",
      description:
        'პროექტი "ტიტან IX" აღმოჩნდა დაუგეგმავი შეფერხების წინაშე...',
      author: {
        name: "ლურჯი თოლია",

        avatar: "/images/img_image_24x24.png",
      },
      date: "18:40",
      category: "კოსმოსი",
    },
  ];

  return (
    <>
      <Header />
      <div className=" lg:grid lg:grid-cols-2 gap-[24px] px-[64px]">
        {articles.map((item, index) => {
          if (item.type === "card") {
            return (
              <React.Fragment key={item.id} className="bg-green-700">
                <Card
                  header={item.header}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  author={item.author}
                  date={item.date}
                  onClick={() => alert("Card clicked!")}
                />
                {index === 0 && <ReportCard />}
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:mx-[64px] lg:gap-[3.2px]">
        {articles.map((item) => {
          if (item.type === "articleCardItem") {
            return (
              <ArticleCardItem
                key={item.id}
                title={item.title}
                image={item.image}
                author={item.author}
                date={item.date}
              />
            );
          }
        })}
      </div>

      <div className="bg-black min-h-screen">
        <CardsContainer
          cards={cardsData}
          className="max-w-md mx-auto lg:mx-unset lg:max-w-full "
        />
        <NewsCards />
        <NewsAuthots />
        <div className="lg:grid lg:grid-cols-3 lg:gap-[20px] bg-white lg:mb-[98px] px-[64px]">
          {[...Array(6)].map((_, idx) => (
            <div className="space-y-2 py-2 " key={idx}>
              <Card
                key={`repeat-card-${idx}`}
                header="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
                image="/images/img_image_279x642.png"
                description="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება..."
                category="მეცნიერება"
                author={{
                  name: "ლურჯი თოლია",
                  avatar: "./images/img_image_24x24.png",
                }}
                date="გუშინ, 18:40"
                onClick={() => alert("Card clicked!")}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
