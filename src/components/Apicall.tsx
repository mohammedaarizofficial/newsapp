import { useState, useEffect } from "react"
import type { Apiresponse, News } from "../data/news"

export default function Apicall() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
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
  }, [])

  if (loading) return <p>Loading news...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Top Headlines</h2>

      {news.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          {article.urlToImage && <img src={article.urlToImage} width={300} />}
          <p>{article.description}</p>
          <a href={article.url} target="_blank">Read more</a>
        </div>
      ))}
    </div>
  )
}
