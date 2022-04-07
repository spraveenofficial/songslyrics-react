import Baseurl from "../../baseurl";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, fetchedData] = useState([]);
  const functionFetch = async () => {
    const response = await axios({
      url: `${Baseurl}/total`,
      method: "GET",
    });
    console.log(response.data);
  };
  useEffect(() => {
    functionFetch();
  }, []);
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
