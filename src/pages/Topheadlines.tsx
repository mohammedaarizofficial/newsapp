import { useState, useEffect } from "react"
import type { Apiresponse, News } from "../data/news"

type Topheadlinesprops={
    filterby:string;
}

export default function Topheadlines({filterby}:Topheadlinesprops) {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://newsapi.org/v2/top-headlines?country=us&category=${filterby}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
          )}`
        )

        if (!response.ok) throw new Error("Failed to fetch news")

        const data: Apiresponse = await response.json()
        setNews(data.articles)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [filterby])

  if (loading) return <p>Loading news...</p>
  if (error) return <p>Error: {error}</p>

  return (<>

    <h1 className="news-title">Top Headlines</h1>
    <div className="news-grid">
      
  {news.map((a, index) => (
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
