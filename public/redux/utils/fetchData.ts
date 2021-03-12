export const fetchData = async (url: string, method: string, body?: object) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
  });
  return response.json();
};
