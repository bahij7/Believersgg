import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import New from './New';

function News() {
  const website = <a href='https://www.believersgg.vercel.app' target='_blank'></a>
  const News = [{ type : 'Recrutement',
                topic :`Moroccan Free Fire players! 'Believers' seeks one exceptional player. If you're passionate, skilled, possess a clean mic, no noise, a changing name card, and have some records gameplay, join us! Let's conquer together! 🚀🎮 #BelieversRecruitment #FreeFire`,
                link : <a href='https://www.instagram.com/believersgg' target='_blank'>Contact Here</a>,
                date : '29 Jan 2024'},
                

                {type : 'Achievements',
                topic :`We're thrilled to announce the launch of our website! 🌐 Explore it now. Exciting times ahead! #NewBeginnings #WebsiteLaunch`,
                date: "1 Feb 2024" },
              ]
  const newNews = News.reverse();


    useEffect(()=>{
      document.title = 'Believersgg - News';
      window.scrollTo(0, 0);
    }, [])


  return (
    <div>
      <div className="no"><p>Switch to Mobile or Tablet Screen</p></div>
        <Navbar/>

        <div className="news">
          {newNews.map((news, index) => (
              <New key={index} type={news.type} topic={news.topic} date={news.date} link={news.link}/>
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default News