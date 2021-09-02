import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./NewsFeed.css";

function NewsFeed() {
  const [news, setNews] = useState({
    articleTitle: null,
    img: null,
    articleTitle2: null,
    img2: null,
    articleTitle3: null,
    img3: null,
  });

  useEffect(() => {
    Axios({
      baseURL: "https://newsapi.org/v2/everything",
      method: "get",
      headers: {
        "X-Api-Key": process.env.REACT_APP_API_KEY_NEWS,
      },

      params: {
        q: "ethereum",
        from: "",
        to: "",
        language: "en",
        sortBy: "",
      },
    }).then((res) => {
      console.log(res);
      setNews({
        articleTitle: res.data.articles[0].title,
        img: res.data.articles[0].urlToImage,
        articleTitle2: res.data.articles[1].title,
        img2: res.data.articles[1].urlToImage,
        articleTitle3: res.data.articles[2].title,
        img3: res.data.articles[2].urlToImage,
      });
    });
  }, []);

  return (
    <div>
      <div className="article-wrapper">
        <div className="article">
          <img src={news.img} alt="" />
          <h3>{news.articleTitle}</h3>
        </div>

        <div className="article">
          <img src={news.img2} alt="" />
          <h3>{news.articleTitle2}</h3>
        </div>

        <div className="article">
          <img src={news.img3} alt="" />
          <h3>{news.articleTitle3}</h3>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
