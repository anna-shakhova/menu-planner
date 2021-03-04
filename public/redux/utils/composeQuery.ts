import { RecipeQuery } from '../../types/recipe';

export const composeQuery = (url: string, query: RecipeQuery) =>
  (url + (Object.keys(query) as Array<keyof RecipeQuery>).reduce((str, field) => {
    if (query[field]) {
      const addStr = (str === '') ? `?${field}=${query[field]}` : `&${field}=${query[field]}`;
      return (str + addStr);
    }
    return str;
  }, ''));
