/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import { NewsList } from "./news";

export default function News({ news }) {
  //const length = news.length;

  if (!Array.isArray(news) || news.length <= 0) {
    return null;
  }

  return (
    <section className="news-box">
      <header className="news-box-title">
        <h1>Ultimas Notícias</h1>
      </header>
      {NewsList.map((noticias, index) => {
        return (
          <div className="news-box-new">
            <a href={noticias.url}>
              <img src={noticias.img} className="news-img" />
            </a>
            <div>
              <h2>
                <a href={noticias.url}>{noticias.name}</a>
              </h2>
              <p>
                <a href={noticias.url}>{noticias.category}</a>
              </p>
              <p>
                <a href={noticias.url}>{noticias.text}</a>
              </p>
              <p>
                <a href={noticias.url}>{noticias.readmore}</a>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
