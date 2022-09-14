import {useState, useEffect} from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(newData => setData(newData));
  }, [url]);

  return [data];
};

export default useFetch;
