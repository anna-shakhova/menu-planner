export const composeQuery = (url, query) => {
  return ('http://localhost:3001/api/recipes/complexSearch'
    + Object.keys(query).reduce((str, field) => {
      if (query[field]) {
        str += (str === '') ? '?' : '&';
        str += field + '=' + query[field];
      }
      return str;
    }, ''));
};
