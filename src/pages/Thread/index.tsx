import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./styles.css";
import { api } from "../../services/api";

interface NewsInterface {
  id: number;
  name: string;
  site: string;
  points: number;
  author: string;
  time: number;
  replies: Array<any>;
}

export default function Thread() {
  const { id } = useParams();
  const [singleHackerNews, setSingleHackerNews] = useState<NewsInterface | null>(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((response) => {
      setSingleHackerNews(response.data);
    });
  }, [id]);

  if (singleHackerNews === null) {
    return <div></div>;
  }

  const replies = singleHackerNews.replies.map((el) => {
    return (
      <div className="reply" key={el.time}>
        <span className="news-id"> ▲ </span>
        <span className="reply-info">
          {" "}
          {el.author} {el.time} minutes ago | next [-]
        </span>
        <p className="reply-desc">{el.reply}</p>
        <button className="reply-button">Reply</button>
      </div>
    );
  });
  return (
    <form className="container">
      <div className="content">
        <Navbar />
        <div className="news-container">
          <article>
            <span className="news-id"> ▲ </span>
            <Link to={`/thread/${singleHackerNews.id}`}>
              <span className="news-name"> {singleHackerNews.name}</span>
            </Link>
            <span className="news-site">({singleHackerNews.site})</span>
            <p className="news-info">
              {singleHackerNews.points} points by {singleHackerNews.author}{" "}
              {singleHackerNews.time} hours ago | hide | past | favorite{" "}
              {singleHackerNews.replies.length} comments
            </p>
            <div className="reply-textarea">
              <textarea cols={75} rows={8}></textarea>
              <button>add comment</button>
            </div>
            <div>{replies}</div>
          </article>
          <Footer />
        </div>
      </div>
    </form>
  );
}
