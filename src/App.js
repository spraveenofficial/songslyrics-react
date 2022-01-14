import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Footer";
import Request from "./pages/Request/Request";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/request" exact={true} element={<Request />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
