import { createContext } from "react";
import { useState } from "react";

const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <DictionaryContext.Provider
      value={{
        data,
        setData,
        notFound,
        setNotFound,
        loading,
        setLoading,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;
