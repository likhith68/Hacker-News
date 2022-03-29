import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Search from './Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to="/about">About</Link>
        </div>

      </div>
      <div className='home__body'>
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/03/hacker-pixabay-1614780001.jpg"></img>
        <h1><center>Hacker News Search</center></h1>
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>

    </div>

  )
}

export default Home