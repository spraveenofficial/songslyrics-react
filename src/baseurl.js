const Baseurl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api"
    : "https://songslyrics-backend.vercel.app/api";

export default Baseurl;
