import Navbar from "../../components/Navbar/Index";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - SongsLyrics </title>
        <meta name="description" content="This is the home page." />
      </Helmet>
      <Hero />
      <Main />
    </div>
  );
}
