import React, { useEffect, useState } from 'react';

const ReadNews = () => {
  const [headlines, setHeadlines]= useState([]);

  useEffect(()=> {
    const fetchNews= async()=> {
      try {
        const response= await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f15b795b81fe4e97bde7a5805e783c42');
        const data= await response.json();
        const titles= data.articles.map(article=> article.title);
        setHeadlines(titles);

      } catch(error) {
        alert('error fetching news');
      }
    }
    fetchNews();
  }, []);

  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">📰 Latest News Headlines</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {headlines.map((headline, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{headline}</h3>
            <p className="text-gray-500 text-sm">Stay updated!</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReadNews;