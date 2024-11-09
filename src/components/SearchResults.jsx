import React from "react";

function SearchResults({ data, notFound }) {
  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      {data.length === 0 && notFound === false ? null : notFound ? (
        <h2 style={{ margin: "16px 0" }}>Not Found :(</h2>
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

// (
//   <div className="search-results-container">
//     <h3>Search Results</h3>
//     <p>
//       Word: <strong>{data.word ? data.word : "dfj"}</strong>
//     </p>
//     <div className="pronounciation-section">
//       <p>Pronounciation:</p>
//       {data.audio ? <audio controls src={data.audio}></audio> : "not"}
//     </div>
//     {data.meanings
//       ? data.meanings.map((definition) => {
//           return (
//             <div className="word-meaning">
//               <p>
//                 Definition: <strong>{definition.definition}</strong>
//               </p>
//             </div>
//           );
//         })
//       : ""}
//   </div>
// );
