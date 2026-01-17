import {useState, useEffect} from 'react'
import type {Article, Apiresponse} from '../data/everything'

type Everythingprops={
    query:string;
    sortby:string;
}

export default function Everything({query,sortby}:Everythingprops){
    const[article, setArticles] = useState<Article[]>([])
    const[error, setError] = useState<string | null>(null)
    const[loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        if(!query) return
        if(!sortby) return
        const fetchnews = async ()=>{
        try{
            const response = await fetch(
                `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortby}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
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
},[query,sortby])
  if (loading) return <p>Loading news...</p>
  if (error) return <p>Error: {error}</p>
    return(
    <>
      <h1 className="news-title">Everything USA</h1>
        <div className="news-grid">
          {article.map((a, index) => (
            <article className="news-card" key={index}>
              {a.urlToImage && (
                <img src={a.urlToImage} alt={a.title} />
              )}

              <div className="news-content">
                <h3>{a.title}</h3>
                <p className="news-meta">{a.author}</p>
                <p className="news-desc">{a.description}</p>

                <a href={a.url} target="_blank" className="read-more">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
    </>
    )
}