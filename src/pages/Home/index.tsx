import Navbar from "../../components/Navbar";
import News from "../../components/NewsTable";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <News />
      </div>
    </div>
  )
}
