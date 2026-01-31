const cors = require('cors')
const express = require('express');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = 3000;

app.use(cors())
const apikey = process.env.NEWS_API_KEY;

app.get('/news/topheadlines',async (req,res)=>{
    try{
        
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`);
        const data = await response.json();

        const News = data.articles.map((article)=>({
            title:article.title,
            description:article.description,
            image:article.urlToImage,
            source:article.source,
            date:article.publishedAt,
            url:article.url
    }));

    res.json(News);
    }catch(error){
        console.log(error);
        res.status(500).json({message:'unable to fetch news'});
    }
});

app.get('/news/everything',async(req,res)=>{
    try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apikey}`);
        const data = await response.json();

        const News = data.articles.map((article)=>({
            title:article.title,
            description:article.description,
            image:article.urlToImage,
            source:article.source,
            date:article.publishedAt,
            url:article.url
        }));
        res.json(News);
    }catch(error){
        console.log(error);
        res.status(500).json({message:'unable to fetch news'});
    }
});

app.listen(port, ()=>{
    console.log('Server is listening at port:'+port);
});