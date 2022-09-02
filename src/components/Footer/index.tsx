import "./styles.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p className="title">Applications are open for YC Winter 2023</p>
      <p className="desc">Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact</p>
      <div>
        <span className="search">Search:</span>
        <input type="text" />
      </div>
    </footer>
  )
}
