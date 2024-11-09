import Navbar from "./components/Navbar";
import SearchWord from "./components/SearchWord";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchWord setData={setData} setNotFound={setNotFound} />
              <SearchResults data={data} notFound={notFound} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
