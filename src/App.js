import Navbar from "./components/Navbar";
import SearchWord from "./components/SearchWord";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import About from "./components/About";
import { DictionaryProvider } from "./context/DictionaryContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DictionaryProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchWord />
                <SearchResults />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </DictionaryProvider>
  );
}

export default App;
