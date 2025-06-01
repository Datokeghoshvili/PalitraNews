import React from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import ReportCard from './components/RepoertCard'
import ArticleCardItem from './components/ArticleCardItem'
import CardsContainer from './components/CardsContainer'
import NewsCards from './components/News'
import NewsAuthots from './components/NewsAuthors'
import Footer from './components/footer'

function App() {
  const articles = [
    {
      id: 1,
      type: 'card',
      header: "„ბოდიოიდები“ –  ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/img_image_279x642.png" ,
      description: "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: 'ლურჯი თოლია', avatar: "/images/img_image_24x24.png"},
      date: "გუშინ, 18:40"
    },
    {
      id: 2,
      type: 'card',
      header: "„ბოდიოიდები“ –  ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/img_image_279x642.png" ,
      description: "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: 'ლურჯი თოლია', avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40"
    },
    {
      id: 3,
      type: 'card',
      header: "„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
      image: "/images/img_image_279x642.png" ,

      description: "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება...",
      // category: "მეცნიერება",
      author: { name: 'ლურჯი თოლია', avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40"
    },
    {
      id: 4,
      type: 'articleCardItem',
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png" ,
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40"
    },
     {
      id: 4,
      type: 'articleCardItem',
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png" ,
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40"
    },
     {
      id: 4,
      type: 'articleCardItem',
      title: "ბოდიოიდები",
      image: "/images/img_image_279x642.png" ,
      author: { name: "ლურჯი თოლია", avatar: "/images/img_image_24x24.png" },
      date: "გუშინ, 18:40"
    }
  ];
  const cardsData = [
  {
    image: '/images/astronaut.png',
    title: '"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები',
    description: 'სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ.',
    
    category: 'კოსმოსი',
  },
  {
    image: '/images/rocket.png',
    title: 'მშენებლობა შეჩერდა კოსმოსში, რაც შესაძლოა დიდი დარტყმა იყოს',
    description: 'პროექტი "ტიტან IX" აღმოჩნდა დაუგეგმავი შეფერხების წინაშე...',
    author: {
      name : "ლურჯი თოლია",
      avatar: '/images/img_image_24x24.png',
    },
    date: '18:40',
    category: 'კოსმოსი',
  },
  {
    image: '/images/rocket.png',
    title: 'მშენებლობა შეჩერდა კოსმოსში, რაც შესაძლოა დიდი დარტყმა იყოს',
    description: 'პროექტი "ტიტან IX" აღმოჩნდა დაუგეგმავი შეფერხების წინაშე...',
    author: {
           name : "ლურჯი თოლია",

      avatar: '/images/img_image_24x24.png',
    },
    date: '18:40',
    category: 'კოსმოსი',
  }
];


  return (
    <>
      <Header />
      {articles.map((item, index) => {
        if (item.type === 'card') {
          return (
            <React.Fragment key={item.id}>
              <Card
                header={item.header}
                image={item.image}
                description={item.description}
                category={item.category}
                author={item.author}
                date={item.date}
                onClick={() => alert('Card clicked!')}
              />
              {index === 0 && <ReportCard />}
            </React.Fragment>
          );
        } else if (item.type === 'articleCardItem') {
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
        return null;
      })}
         <div className="bg-black min-h-screen">
      <CardsContainer
      
        cards={cardsData}
        className="max-w-md mx-auto"
      />
      <NewsCards />
      <NewsAuthots />
         {[...Array(2)].map((_, idx) => (


<div className="space-y-2 py-2">
  


  <Card

    key={`repeat-card-${idx}`}
    header="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
    image=  '/images/img_image_279x642.png'

    description="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება..."
    category="მეცნიერება"
    author={{ name: 'ლურჯი თოლია', avatar: './images/img_image_24x24.png' }}
    date="გუშინ, 18:40"
    onClick={() => alert('Card clicked!')}
  />
</div>
))}

     

    </div>
      <Footer/>

    </>
  );
}

export default App;
