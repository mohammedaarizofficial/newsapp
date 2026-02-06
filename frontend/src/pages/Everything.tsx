import { useEffect, useState,useRef } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type { Article } from "@/data/everything";

interface EverythingProps{
  sortby:string;
  search:string;
}

export default function Everything({sortby,search}:EverythingProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<Record<string, Article[]>>({});
  const   DEFAULT_KEY = '__default__';
  const APIKEY = import.meta.env.VITE_API_BASE_URL;

  const query = search.trim() || DEFAULT_KEY;

  useEffect(() => {
    const fetchEverything = async ()=>{

      if(cache.current[query]){
        setArticles(cache.current[query]);
        return;
      }

      try{
        const url = query ===   DEFAULT_KEY ? `${APIKEY}/news/everything?sort=${sortby}` : `${APIKEY}/news/everything?sort=${sortby}&search=${query}`;
        const response = await fetch(url);

        if(!response.ok){
          throw new Error('Unable to fetch news!');
        }

        const data = await response.json();
        cache.current[query]= data;
        setArticles(data);
      }catch(error){
        console.log(error);
        setError("Failed to fetch news!");
      }finally{
        setLoading(false);
      }
   
    }
    fetchEverything();
  }, [sortby,query]);

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
