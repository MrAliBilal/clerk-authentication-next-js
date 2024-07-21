import Hero from "./components/Hero";
import Content from "./components/Content";

export default function Home() {
  return (
    <main >
      <Hero />
      <Content cardName="News" heading="Top News" />
      <Content cardName="Article" heading="Top Article" />
      <Content cardName="Story" heading="Top Story" />
    </main>
  );
}
