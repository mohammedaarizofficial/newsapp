import { useEffect, useState,useRef } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type {  News } from "@/data/news";

export default function Topheadlines({filterby}:{filterby:string}) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const APIKEY = import.meta.env.VITE_API_BASE_URL;


  type CacheEntry<T> = {
    data:T;
    timestamp:number
  }
  const cache = useRef<Record<string, CacheEntry<News[]>>>({});
  const cacheTime = 5 * 60 * 1000;

  const isCacheValid = (entry:CacheEntry<News[]>)=>{
    return Date.now() - entry.timestamp < cacheTime;
  }

  useEffect(() => {
    const fetchTopHeadlines = async()=>{
      //Cache logic written here
      const cached = cache.current[filterby];
      if(cached && isCacheValid(cached)){
        console.log("✅ CACHE HIT", {
          filterby,
          age: Date.now() - cached.timestamp,
        });
        setNews(cached.data);
        setLoading(false);
        return;
      }

      try{
        console.log('Fetching data from api');
        const response = await fetch(`${APIKEY}/news/topheadlines?q=${filterby}`)
        const data = await response.json();
        setNews(data);
        setLoading(false);
        cache.current[filterby] = {
          data,
          timestamp:Date.now()
        }
      }catch(error){
        console.log(error);
      }

    }
    fetchTopHeadlines();
  },[filterby]);

  const articles = news.map((a) => ({
    id: a.url,
    title: a.title,
    description: a.description ?? "No description available",
    image: a.image,
    source: a.source.name,
    date: new Date(a.date).toLocaleDateString(),
    url: a.url,
    category: filterby,
  }));

  return <NewsGrid articles={articles} loading={loading} />;
}
