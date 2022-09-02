import { Link } from "react-router-dom";
import hackerNewsLogo from "../../assets/hacker-news.png"
import "./styles.css";

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="itens-left">
        <Link to="/">
          <img src={hackerNewsLogo} alt="Hacker news logo" />
          <strong>Hacker News</strong>
        </Link>
        <span>new | past | comments | ask | show | jobs | submit</span>
      </div>
      <div className="itens-right">
        <span>login</span>
      </div>
    </header>
  )
}
