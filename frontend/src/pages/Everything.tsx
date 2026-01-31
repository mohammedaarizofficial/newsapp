import { useEffect, useState } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type { Article, } from "@/data/everything";


export default function Everything( ) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEverything = async ()=>{

      try{
        const response = await fetch('http://localhost:3000/news/everything');

        if(!response.ok){
          throw new Error('Unable to fetch news!');
        }

        const data = await response.json();
        setArticles(data);
      }catch(error){
        console.log(error);
        setError("Failed to fetch news!");
      }finally{
        setLoading(false);
      }
   
    }
    fetchEverything();
  }, []);


  // Transform API articles → UI articles
  const uiArticles = articles.map((a) => ({
    id: a.url,
    title: a.title,
    description: a.description ?? "No description available",
    image: a.image,
    source: a.source.name,
    date: new Date(a.date).toLocaleDateString(),
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
