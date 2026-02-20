import NewsArticle from "~/components/news-article";

export default function NewsSection() {
  return <div style={{
    background: "rgb(240, 240, 240)",
  }}>
    <h2 style={{
        background: "#026d70",
        fontSize: "16px",
        width: "fit-content",
        marginBottom: "10px"
    }}>News from course and program rooms</h2>
    <NewsArticle/>
    <NewsArticle/>
    <NewsArticle/>
    <NewsArticle/>
  </div>;
}