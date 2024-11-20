import { useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";
import LoadingGif from "../assets/loading.gif";

function SearchResults() {
  const { data, notFound, loading } = useContext(DictionaryContext);
  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      {data.length === 0 &&
      notFound === false &&
      loading !== true ? null : notFound ? (
        <h2
          style={{
            margin: "16px 0",
            backgroundColor: "#ccc",
            padding: "4px 16px",
          }}
        >
          Not Found :(
        </h2>
      ) : loading ? (
        <img
          src={LoadingGif}
          alt="loading-gif"
          style={{ width: "50px", margin: "20px 50px" }}
        />
      ) : (
        <>
          <p>
            Word: <strong>{data.word}</strong>
          </p>
          {data.audio ? (
            <div className="pronounciation-section">
              <p>Pronounciation:</p>
              <audio controls src={data.audio}></audio>
            </div>
          ) : null}

          {data.meanings.map((definition, index) => {
            return (
              <div className="word-meaning" key={index}>
                <p>
                  Definition {++index}: <strong>{definition.definition}</strong>
                </p>
                {definition.example ? (
                  <p>
                    Example: <strong>{definition.example}</strong>
                  </p>
                ) : null}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SearchResults;
