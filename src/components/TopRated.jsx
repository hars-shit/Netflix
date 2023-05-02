import React, { useEffect, useState } from "react";
import "../styles/Home.scss";
import axios from "axios";
import {AiOutlinePlus} from 'react-icons/ai';

import {BiPlay} from 'react-icons/bi';
const apikey = "18d76df27d64052fb0a6511ba0d80ae4";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original";

const rating="top_rated";
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

const Card = ({ img }) => {
  return (
  <img src={img}  className="card"  alt="cover" />
  )

};



const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => {
      return (
        <>
       {/* { console.log(item.poster_path)} */}
   {/* <img src={`${imgurl}/${item.poster_path}`} className="card" alt="" /> */}
        {/* <Card key={index} img={`${imgurl}/${item.poster_path}`} /> */}
        <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
        </>
  )
}
      )}
    </div>
  </div>
);
const TopRated = () => {

  const [topRated,setTopRated] =useState([]);
useEffect(()=>{
    // for top rated movies 
    const fetchTopRated= async ()=>{
        try{
            const response = await axios.get(`${url}/movie/${rating}?api_key=${apikey}`)
            setTopRated(response.data.results)
        }catch(err){
            console.log(err)
        }
    }
    
    fetchTopRated();
},[])

  return (
    <section className="home">
        {/* https://api.themoviedb.org/3/tv/popular?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US&page=2 */}
      <div className="banner" style={{backgroundImage: topRated[8] ? `url(${`${imgurl}/${topRated[8].poster_path}`})`:"rgb(16,16,16)"}}>
      {
          topRated[8] && <h1>{topRated[8].original_title}</h1>
        }
      {
         topRated[8] &&  <p>{topRated[8].overview}</p>
        }
        <div>

        <button onClick={(e)=>{alert("Consist FrontEnd Only")}}>Play <BiPlay /></button>
        <button>My List<AiOutlinePlus /></button>
        </div>
        </div>
      <Row title={"Top Rated"} arr={topRated} />
     
    </section>
  );
};
export default TopRated;
