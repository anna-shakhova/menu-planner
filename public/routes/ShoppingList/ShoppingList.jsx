import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import { AisleAccordion } from './AisleAccordion/AisleAccordion';

/**
 * TODO move to utils
 */

const getAvaiilableProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/products');
    const result = await response.json();
    return result.products.reduce((productList, product) => {
      product.name = product.name.toLowerCase();
      productList[product.name] = product;
      return productList;
    }, {});
  } catch (err) {
    console.log(err);
  }
};

const getIngredientsFromRecipes = async (recipes) => {
  const availableProducts = await getAvaiilableProducts();

  const ingredients = recipes.reduce((list, recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!list[ingredient.name]) {
        list[ingredient.name] = {
          name: ingredient.name,
          metricAmount: 0,
          metricUnits: ingredient.metricUnits,
          aisle: ingredient.aisle,
        };
      }
      list[ingredient.name].metricAmount += ingredient.metricAmount;
    });
    return list;
  }, {});

  Object.keys(availableProducts).forEach((productName) => {
    if (ingredients[productName]) {
      ingredients[productName].metricAmount -= availableProducts[productName].metricQuantity;
    }
  });

  const groupedList = Object.values(ingredients)
    .filter((el) => el.metricAmount > 0)
    .reduce((aisleList, ingredient) => {
      if (!aisleList[ingredient.aisle]) aisleList[ingredient.aisle] = [];
      aisleList[ingredient.aisle].push(ingredient);
      return aisleList;
    }, {});

  return Object.values(groupedList);
};

/** ******************** */

export const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch('http://localhost:3001/recipes');
      const result = await response.json();
      const ingrList = await getIngredientsFromRecipes(result.recipes);
      setIngredients(ingrList);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper elevation={3}>
      {ingredients.map((ingredientAisle) => (
        <AisleAccordion ingredientAisle={ingredientAisle} key={ingredientAisle[0].aisle} />
      ))}
    </Paper>
  );
};
