import * as React from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const APP_MENU_ITEMS = [
  {
    text: 'Products',
    icon: <KitchenIcon />,
    link: 'products',
  },
  {
    text: 'Menu',
    icon: <MenuBookIcon />,
    link: 'menu',
  },
  {
    text: 'Shopping list',
    icon: <ShoppingCartIcon />,
    link: 'shoppingList',
  },
];

export const CUISINES = ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European',
  'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American',
  'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'];

export const MEAL_TYPES = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup',
  'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink'];

export const PRODUCT_UNITS = ['kg', 'g', 'ml', 'l', 'pcs'];

export const INTOLERANCES = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy',
  'Sulfite', 'Tree Nut', 'Wheat'];
