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
        const query = req.query.q || 'general';
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${query}&apiKey=${apikey}`);
        const data = await response.json();

        const News = data.articles
        .filter(articles => articles.urlToImage !== null)
        .map((article)=>({
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
        const sort = req.query.sort || 'relevancy';
        const search = req.query.search || 'general';
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=${sort}&apiKey=${apikey}`);
        const data = await response.json();

        const News = data.articles
        .filter(article => article.urlToImage !== null)
        .map((article)=>({
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