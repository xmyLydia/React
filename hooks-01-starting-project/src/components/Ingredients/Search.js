import React, { useState, useEffect, useRef } from 'react';
import useHttp from '../../hooks/http';
import Card from '../UI/Card';
import './Search.css';
import ErrorModal from '../UI/ErrorModal';
const Search = React.memo(props => {
  const [enterFilter, setEnterFilter] = useState('');
  const { onLoadIngredients } = props;
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (enterFilter === inputRef.current.value) {
          const query = enterFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enterFilter}"`;

          sendRequest('https://hooks-e26d2.firebaseio.com/ingredients.json' + query,
            'GET');
          fetch('https://hooks-e26d2.firebaseio.com/ingredients.json' + query)

        }
      }
      , 500);
    return () => {
      clearTimeout(timer);
    }
  }, [enterFilter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients]);
  return (
    <section className="search">
      {error && <ErrorModal onClose={clear} >{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input type="text"
            ref={inputRef}
            value={enterFilter}
            onChange={event =>
              setEnterFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
