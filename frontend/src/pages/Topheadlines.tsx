import { useEffect, useState } from "react";
import { NewsGrid } from "@/components/NewsGrid";
import type {  News } from "@/data/news";

export default function Topheadlines({ filterby }: { filterby: string }) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      fetch('http://localhost:3000/news')
      .then((res)=>(res.json()))
      .then((data)=>{
        setNews(data);
        setLoading(false);
        console.log(data);
      })
    }catch(error){
      console.log(error);
    }
  },[]);



  //     const data: Apiresponse = await res.json();
  //     console.log("RAW API RESPONSE:", data);
  //     setNews(data.articles);
  //     setLoading(false);
  //   };

  //   fetchNews();
  // }, [filterby]);

  const articles = news.map((a) => ({
    id: a.url,
    title: a.title,
    description: a.description,
    image: a.image,
    source: a.source.name,
    date: new Date(a.date).toLocaleDateString(),
    url: a.url,
    category: filterby,
  }));

  return <NewsGrid articles={articles} loading={loading} />;
}
