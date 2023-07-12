import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss";

import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
  const [Background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home);

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
      setBackground(bg);
  },[data]);

  const searchQueryHandler = (event) =>{
    if(event.key === 'Enter' && query.length > 0)
    {
        navigate(`/search/${query}`);
    }
  }

  return (
    <div className='heroBanner'>
      <div className='wrapper'>
        <div className='heroBannerContent'>
          <span className='title'>Welcome.</span>
          <span className='subTitle'>
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div className='searchInput'>
            <input
            type='text'
            placeholder='search for a movie or TV show...'
            onChange={(e)=>setQuery(e.target.value)}
            onKeyUp={searchQueryHandler} 
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
