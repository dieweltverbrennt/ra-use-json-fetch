import { useState, useEffect } from 'react';

export default function useJsonFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        // console.log(data)
        setData(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, isLoading, hasError];
}