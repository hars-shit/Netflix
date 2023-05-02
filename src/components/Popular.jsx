import axios from "axios";
import '../styles/Home.scss';
import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {BiPlay} from 'react-icons/bi';
const popularMovies="popular";
const url = "https://api.themoviedb.org/3";
const apikey = "18d76df27d64052fb0a6511ba0d80ae4";
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
const Popular=()=>{
    const[popular,setPopular]=useState([]);
    // https://api.themoviedb.org/3/tv/popular?api_key=18d76df27d64052fb0a6511ba0d80ae4&language=en-US&page=1
    useEffect(()=>{
        const fetchPopular= async ()=>{
            try{
                const response = await axios.get(`${url}/movie/${popularMovies}?api_key=${apikey}`)
                setPopular(response.data.results)
            }catch(err){
                console.log(err)
            }
        }
        fetchPopular();

    },[])
    return(
        <>
        <section className="home">
            <div className="banner" style={{backgroundImage: popular[7] ? `url(${`${imgurl}/${popular[7].poster_path}`})`:"rgb(16,16,16)"}}>
            {
                popular[7] && <h1>{popular[7].original_title}</h1>
            }
            {
                popular[7] && <p>{popular[7].overview}</p>
            }
             <div>

<button onClick={(e)=>{alert("Consist FrontEnd Only")}}>Play <BiPlay /></button>
<button>My List<AiOutlinePlus /></button>
</div>
            </div>
            <Row title={"Popular"} arr={popular}/>
        </section>
        </>
    )
}
export default Popular;