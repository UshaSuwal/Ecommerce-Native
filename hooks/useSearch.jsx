import React, { useEffect, useState } from 'react';

const useSearch = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // console.log("Length of results from useSearch::::::::",results)


  const searchApi = searchTerm => {
    console.log("Fetching data for search term:", searchTerm);
    try {
      fetch(`https://dummyjson.com/products/search/?q=${searchTerm}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          
          setResults(data.products);
        })
        .catch(err => {
          setErrorMessage('Something went wrong');
          console.error(err);
        });
    } catch (err) {
      setErrorMessage('Something went wrong');
      console.error(err);
    }
  };



  

  useEffect(() => {
    searchApi('');
  }, []);
 
  return [results, searchApi, errorMessage];
};

export default useSearch;
