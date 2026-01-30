import { useEffect, useState } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type { Article, Apiresponse } from "@/data/everything";

type EverythingProps = {
  sortby: string;
};

export default function Everything({ sortby }: EverythingProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://newsapi.org/v2/everything?q=bitcoin&sortBy=${sortby}&apiKey=${
              import.meta.env.VITE_NEWS_API_KEY
            }`
          )}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data: Apiresponse = await response.json();
        console.log("RAW API RESPONSE:", data);

        setArticles(data.articles);
      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Live news cannot be loaded due to API restrictions.");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [sortby]);

  // Transform API articles → UI articles
  const uiArticles = articles.map((a) => ({
    id: a.url,
    title: a.title,
    description: a.description,
    image: a.urlToImage,
    source: a.source.name,
    date: new Date(a.publishedAt).toLocaleDateString(),
    url: a.url,
  }));

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  return <NewsGrid articles={uiArticles} loading={loading} />;
}
