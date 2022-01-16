import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Footer";
import Request from "./pages/Request/Request";
import About from "./pages/About/About";
import Error from "./pages/404/404";
import Genre from "./pages/Genre/Genre";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<Error />} />
        <Route path="/genre/:name" element={<Genre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
