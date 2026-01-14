import {useState, useEffect} from 'react'
import type {Article, Apiresponse} from '../data/everything'

export default function Everything(){
    const[article, setArticles] = useState<Article[]>([])
    const[error, setError] = useState<string | null>(null)
    const[loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const fetchnews = async ()=>{
        try{
            const response = await fetch(
                `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
          )}`
            )
            if(!response.ok){
                throw new Error("Failed to fetch news")
            }
            const data: Apiresponse = await response.json()
            setArticles(data.articles)
        }catch(err){
            setError((err as Error).message)
        }finally{
            setLoading(false)
        }
    }
        fetchnews()
},[])
  if (loading) return <p>Loading news...</p>
  if (error) return <p>Error: {error}</p>
    return(
        <>
        <div className="card">
            <h2>Bitcoin</h2>

            {article.map((articles,index)=>(
                <div key={index}>
                    <h3>{articles.title}</h3>
                    <h6>{articles.author}</h6>
                    <p>{articles.description}</p>
                    <img src={articles.urlToImage}/>
                    <a href={articles.url} target="_blank">Read more..</a>

                </div>
            ))}
        </div>
        </>
    )
}