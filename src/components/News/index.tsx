import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import Footer from "../Footer";
import "./styles.css";

interface NewsInterface {
  id: number
  name: string,
  site: string,
  points: number,
  author: string,
  time: number,
  replies: Array<any>;
}

export default function News() {
  const [hackerNews, setHackerNews] = useState<NewsInterface[]>([]);
  const itensPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(hackerNews.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;

  const endIndex = startIndex + itensPerPage;

  const currentItens = hackerNews.slice(startIndex, endIndex);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setHackerNews(response.data)
    })
  }, [])

  return (
    <section className="news-container">
      {currentItens.map((news) => {
        return (
          <article key={news.id}>
            <span className="news-id">{news.id}. ▲ </span>
            <Link to={`/thread/${news.id}`}>
              <span className="news-name"> {news.name}</span>{" "}
            </Link>
            <span className="news-site">({news.site})</span>
            <p className="news-info">
              {news.points} points by {news.author} <Link to={`/thread/${news.id}`}>{news.time} hours ago</Link> |
              hide | <Link to={`/thread/${news.id}`}>{news.replies.length} comments</Link>
            </p>
          </article>
        );
      })}
      <span className="news-more">{
        Array.from(Array(pages), (item, index) => {
          return <button className="button-pagination" key={index} value={index} onClick={(e: any) => setCurrentPage(e.target.value)}>{index+1}</button>
        })
      }</span>
      <hr />
      <Footer />
    </section>
  );
}
