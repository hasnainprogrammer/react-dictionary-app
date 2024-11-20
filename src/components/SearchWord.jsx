import { useState, useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";

function SearchWord() {
  const { setData, setNotFound, setLoading } = useContext(DictionaryContext);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Input field cannot be left blank.");
    } else {
      getSearchResults();
    }
  };
  const getSearchResults = async () => {
    setLoading(true);
    setNotFound(false);
    setData([]);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      const [data] = await response.json();
      const {
        word,
        phonetics: [{ audio }],
        meanings,
      } = data;
      for (let meaning of meanings) {
        setData((prevState) => {
          return {
            word: word,
            audio: audio,
            meanings: [...(prevState?.meanings || []), ...meaning.definitions],
          };
        });
      }
      setNotFound(false);
      setLoading(false);
    } catch (e) {
      setNotFound(true);
      console.log("Request Failed due to ", e);
    }
  };
  return (
    <div className="search-word-container">
      <h3>Search for the meaning of any english word</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-btn">
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchWord;
