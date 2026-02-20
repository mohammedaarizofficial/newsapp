const cors = require('cors')
const express = require('express');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())
const apikey = process.env.NEWS_API_KEY;

app.get('/news/topheadlines',async (req,res)=>{
    try{
        const page = req.query.page || 1;
        const query = req.query.q || 'general';
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${query}&page=${page}&pageSize=12&apiKey=${apikey}`);
        const data = await response.json();

        const totalArticles = data.totalResults;
        const limitedResults = Math.min(totalArticles, 100);
        const totalPages = Math.floor(limitedResults / 12);
        if (!response.ok || data.status === "error") {
            console.log("NEWS API ERROR:", data);

            return res.status(400).json({
                message: data.message || "News API failed"
            });
        }
        if (!data.articles || !Array.isArray(data.articles)) {
            return res.json({
                articles: [],
                totalPages: 0,
                totalResults: 0
            });
        }

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
    res.json({
        articles:News,
        totalPages:totalPages,
        totalResults:limitedResults
    });
    }catch(error){
        console.log(error);
        res.status(500).json({message:'unable to fetch news'});
    }
});

app.get('/news/everything',async(req,res)=>{
    try{
        const sort = req.query.sort || 'publishedAt';
        const search = req.query.search || 'general';
        const page = parseInt(req.query.page) || 1;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=12&sortBy=${sort}&apiKey=${apikey}`);
        const data = await response.json();

        const totalArticles = data.totalResults;
        const limitedResults = Math.min(totalArticles, 100);
        const totalPages = Math.floor(limitedResults / 12);
        if (!response.ok || data.status === "error") {
            console.log("NEWS API ERROR:", data);

            return res.status(400).json({
                message: data.message || "News API failed"
            });
        }
        if (!data.articles || !Array.isArray(data.articles)) {
            return res.json({
                articles: [],
                totalPages: 0,
                totalResults: 0
            });
        }

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
        res.json({
            articles:News,
            totalPages:totalPages,
            totalResults:limitedResults
        });
    }catch(error){
        console.log(error);
        res.status(500).json({message:'unable to fetch news'});
    }
});

app.listen(PORT, ()=>{
    console.log('Server is listening at port:'+PORT);
});