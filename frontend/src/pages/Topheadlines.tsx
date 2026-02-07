import { useEffect, useState,useRef } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type {  News } from "@/data/news";

export default function Topheadlines({filterby}:{filterby:string}) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const cache = useRef<Record<string, News[]>>({});

  useEffect(() => {
    const fetchTopHeadlines = async()=>{
      //Cache logic written here
      if(cache.current[filterby]){
        console.log('using cached data');
        setNews(cache.current[filterby]);
        setLoading(false);
        return;
      }

      try{
        console.log('Also Fetching the data and using unnecessary API');
        const response = await fetch(`http://localhost:3000/news/topheadlines?q=${filterby}`)
        const data = await response.json();
        setNews(data);
        setLoading(false);
        cache.current[filterby]= data;
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
