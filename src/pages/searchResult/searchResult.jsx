import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import "./style.scss"

import { fetchDataFromApi } from '../../utiles/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'


const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} =useParams();

  const fetchInitialData =()=>{
    setLoading(true);
    fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`).then(
      (res)=>{
        setData(res);
        setPageNum((prev)=> prev+1);
        setLoading(false);
      }
    )
  }

  useEffect(()=>{
    fetchInitialData();
  },[query]);

  return (
    <div className='searchResultPage'>
      hey  fjsldjfalsjfajsdflasj;lfjjfs;lajfasljdfj
    </div>
  )
}

export default SearchResult;
