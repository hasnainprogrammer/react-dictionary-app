import React, { useState } from "react";

function SearchWord({ setData, setNotFound }) {
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (input === "") {
      alert("Input field cannot be left blank.");
    } else {
      getSearchResults();
    }
  };
  const getSearchResults = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      const [data] = await response.json();
      //   const {
      //     word,
      //     phonetics: [{ audio }],
      //     meanings: [
      //       {
      //         definitions: [{ definition, example }],
      //         definitions: [, { definition:def, example:eg }, ],
      //       },
      //     ],
      //   } = data;
      const {
        word,
        phonetics: [{ audio }],
        meanings,
      } = data;
      for (let meaning of meanings) {
        setData({ word: word, audio: audio, meanings: meaning.definitions });
        setNotFound(false);
      }
    } catch (e) {
      setNotFound(true);
      console.log(e);
    }
  };
  return (
    <div className="search-word-container">
      <h3>Search for the meaning of any english word</h3>
      <div className="input-btn">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}

export default SearchWord;
