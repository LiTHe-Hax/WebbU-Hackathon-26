import CoursesSection from "~/sections/courses-section";
import type { Route } from "./+types/home";
import PageHeader from "~/sections/page-header";
import Footer from "~/sections/footer";
import Links from "~/sections/links-section";
import NewsSection from "~/sections/news-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <PageHeader/>
    <main>
      <div style={{ padding: "0 16px", }}>
        <CoursesSection/>
        <NewsSection/>
        <Links/>
      </div>
    </main>
    <Footer/>
  </>;
}
