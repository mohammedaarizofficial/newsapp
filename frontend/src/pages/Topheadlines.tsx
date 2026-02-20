import { useEffect, useState,useRef } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type {  News } from "@/data/news";

interface topHeadlinesProps{
  filterby:string,
  page:number,
  setTotalPages:React.Dispatch<React.SetStateAction<number>>;
}

export default function Topheadlines({filterby,page,setTotalPages}:topHeadlinesProps) {
  const [news, setNews] = useState<News[]>([]);
  const APIKEY = import.meta.env.VITE_API_BASE_URL;
  const [spinnerLoading, setSpinnerLoading]=useState<boolean>(true);

  const fetchWithRetry = async(
    url:string,
    retries=5,
    delay=2000
  ):Promise<Response>=>{
    for(let attempt = 0 ; attempt <retries;attempt++){
      try{
        const response = await fetch(url);

        if(!response.ok && response.status >= 500){
          throw new Error("Server not ready");
        }

        return response;
      }catch(error){
        if(attempt===retries-1){
          throw error;
        }

        await new Promise(res=>setTimeout(res, delay));
      }
    }
    throw new Error("Failed after retries");
  }

  type CacheEntry<T> = {
    data:T;
    timestamp:number
  }
  const cache = useRef<Record<string, CacheEntry<News[]>>>({});
  const cacheTime = 5 * 60 * 1000;
  const cacheKey = `${filterby}::${page} || "__default__"`;


  const isCacheValid = (entry:CacheEntry<News[]>)=>{
    return Date.now() - entry.timestamp < cacheTime;
  }

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchTopHeadlines = async()=>{
      //Cache logic written here
      const cached = cache.current[cacheKey];
      if(cached && isCacheValid(cached)){
        console.log("✅ CACHE HIT", {
          cacheKey,
          age: Date.now() - cached.timestamp,
        });
        setNews(cached.data);
        setSpinnerLoading(false);
        return;
      }

      try{
        console.log('Fetching data from api');
        const response = await fetchWithRetry(`${APIKEY}/news/topheadlines?q=${filterby}&page=${page}`)
        const data = await response.json();
        setNews(data.articles);
        setTotalPages(data.totalPages);
        cache.current[cacheKey] = {
          data:data.articles,
          timestamp:Date.now()
        }
      }catch(error){
        console.log(error);
      }finally{
        setSpinnerLoading(false);
      }
    }
    fetchTopHeadlines();

  },[filterby,page]);



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

  return <NewsGrid articles={articles} spinnerLoading={spinnerLoading}/>;
}
