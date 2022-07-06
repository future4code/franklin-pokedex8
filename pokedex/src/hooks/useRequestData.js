import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro, tente novamente');
      });
  }, [url]);

  return data;
};

export { useRequestData };
