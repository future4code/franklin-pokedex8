import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = url => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro, tente novamente');
      });
  }, [url]);

  return data;
};

export { useRequestData };
