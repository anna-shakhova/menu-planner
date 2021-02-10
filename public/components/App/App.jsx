import React, { useEffect, useState } from 'react';
import { MiniDrawer } from '../Layout';

export default () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes/2')
      .then(res => res.json())
      .then((resp) => setData(resp))
  }, [])

  return (<div>
    <MiniDrawer></MiniDrawer>
  </div>)
}
