import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enterFilter, setEnterFilter] = useState('');
  const { onLoadIngredients } = props;
  useEffect(() => {
    const query = enterFilter.length === 0
      ? ''
      : `?orderBy="title"&equalTo="${enterFilter}"`;
    fetch('https://hooks-e26d2.firebaseio.com/ingredients.json' + query)
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        onLoadIngredients(loadedIngredients)
      })
  }, [enterFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text"
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
