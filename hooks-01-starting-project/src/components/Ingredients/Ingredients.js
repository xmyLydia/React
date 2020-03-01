import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const addIngredientHandler = ingredient => {
    fetch('https://hooks-e26d2.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }
    ).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients =>
        [...prevIngredients,
        {
          id: responseData.name,
          ...ingredient
        }])
    });

  }
  const removeIngredientHandler = (id) => {
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== id)
    )
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
