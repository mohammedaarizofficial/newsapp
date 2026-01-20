import { useEffect, useState } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type { Apiresponse, News } from "@/data/news";

export default function Topheadlines({ filterby }: { filterby: string }) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔥 useEffect triggered with:", filterby);
    const fetchNews = async () => {
      setLoading(true);

      const res = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://newsapi.org/v2/top-headlines?country=us&category=${filterby}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        )}`
      );



      const data: Apiresponse = await res.json();
      console.log("RAW API RESPONSE:", data);
      setNews(data.articles);
      setLoading(false);
    };

    fetchNews();
  }, [filterby]);

  const articles = news.map((a) => ({
    id: a.url,
    title: a.title,
    description: a.description,
    image: a.urlToImage,
    source: a.source.name,
    date: new Date(a.publishedAt).toLocaleDateString(),
    url: a.url,
    category: filterby,
  }));

  return <NewsGrid articles={articles} loading={loading} />;
}
