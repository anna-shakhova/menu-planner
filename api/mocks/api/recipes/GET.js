const data = {
  1: {
    data: 'test1'
  },
  2: {
    data: 'test2'
  }
}

export default (request, response) => {
  setTimeout(() => {
    response.json(data[request.params['order_id']])
  }, 50)
}
