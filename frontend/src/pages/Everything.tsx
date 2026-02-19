import { useEffect, useState,useRef } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type { Article } from "@/data/everything";

interface EverythingProps{
  sortby:string;
  search:string;
  page:number;
  setTotalPages:React.Dispatch<React.SetStateAction<number>>;
}

export default function Everything({sortby,search,page,setTotalPages}:EverythingProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] =useState<number>(0);

  type cacheEntry<T> = {
    data:T,
    timestamp:number
  }
  const cache = useRef<Record<string, cacheEntry<Article[]>>>({});
  const query = search.trim();
  const cachekey = `${sortby}::${query}::${page}|| "__default__"}`;
  const cacheExpiry = 5 * 60 * 1000;

  const isCacheValid = (entry:cacheEntry<Article[]>)=>{
    return Date.now() - entry.timestamp < cacheExpiry;
  }

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchEverything = async ()=>{
      const cached = cache.current[cachekey];
      if(cached && isCacheValid(cached)){
        console.log('cache hit');
        setArticles(cached.data);
        return;
      }

      try{
        console.log('the api is being fetched');
        const url = `http://localhost:3000/news/everything?page=${page}&sort=${sortby}&search=${query}`;
        const response = await fetch(url);

        if(!response.ok){
          throw new Error('Unable to fetch news!');
        }

        const data = await response.json();
        cache.current[cachekey]={
          data:data.articles,
          timestamp:Date.now()
        };
        
        setArticles(data.articles);
        setTotalPages(data.totalPages);
        setTotalResults(data.totalResults);
      }catch(error){
        console.log(error);
        setError("Failed to fetch news!");
      }finally{
        setLoading(false);
      }
   
    }
    fetchEverything();
  }, [sortby,query,page]);

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

  console.log(totalResults);

  return <NewsGrid articles={uiArticles} loading={loading} />;
}
