import axios from "axios";
import '../styles/Home.scss';
import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {BiPlay} from 'react-icons/bi';
const imgurl = "https://image.tmdb.org/t/p/original";
const Card=({img}) =>{
    return(
        <img src={img} className="card" alt=""/>
    )
}
const Row=({title,arr=[]})=>(
    <div className="row">
        <h2>{title}</h2>
    <div>
    {arr.map((item,index)=>{
        return(
            <>
            <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
            </>
        )
    }
    )}
    </div>
    </div>
);
const TvShows=()=>{
    const[tvShows,setTvShows]=useState([]);
    // https://api.themoviedb.org/3/tv/popular?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US&page=1
    useEffect(()=>{
        const fetchTvShows=async () => {
            try{
                const response=await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US&page=1");
                setTvShows(response.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchTvShows();

    },[])
    return(
        <>
        <section className="home">
            <div className="banner" style={{backgroundImage: tvShows[17] ? `url(${`${imgurl}/${tvShows[17].poster_path}`})`:"rgb(16,16,16)"}}>
            {
                tvShows[17] && <h1>{tvShows[17].original_name}</h1>
            }
            {
                tvShows[17] && <p>{tvShows[17].overview}</p>
            }
             <div>

<button onClick={(e)=>{alert("Consist FrontEnd Only")}}>Play <BiPlay /></button>
<button>My List<AiOutlinePlus /></button>
</div>
            </div>
            <Row title={"Upcoming TvShows"} arr={tvShows}/>
        </section>
        </>
    )
}
export default TvShows;