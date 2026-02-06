import { useEffect, useState } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type {  News } from "@/data/news";

export default function Topheadlines({filterby}:{filterby:string}) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const APIKEY = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    try{
      fetch(`${APIKEY}/news/topheadlines?q=${filterby}`)
      .then((res)=>(res.json()))
      .then((data)=>{
        setNews(data);
        setLoading(false);
      })

    }catch(error){
      console.log(error);
    }
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
