import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';
const Home = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState('');

  useEffect(() => {
    axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=20`).then(
      res => setData(res.data.coins)
    )
  })
  return (
    <>
      <div className='header'>
          <input type = "text" value={search} placeholder="search crypto here" onChange={(e) => setSearch(e.target.value)} />  
      </div>

    {data.length>0 && 
    <div className='grid-container'>
      {data.filter(crypto => 
      crypto.name.toLowerCase().includes(search.toLowerCase())
      ).map(crypto => 
        <div>
          <ImgCard 
            name = {crypto.name} rank = {crypto.rank} price = {crypto.price} marketCap = {crypto.marketCap}
            key = {crypto.id} url = {crypto.icon}/>
        </div>
        )}
    </div>}
    </>

    
  )
}

export default Home