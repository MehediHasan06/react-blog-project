import { useState, useEffect } from "react";

const useFetch = (url) => {
  // url will be coming dynamically
  const [data, setData] = useState(null); // to reuse the hook, we've replaced the "blogs" with "data"
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal }) //we'll grab the url from the useFetch() argument
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });
      return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }; // returning the states
};

export default useFetch;
