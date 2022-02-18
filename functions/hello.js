exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Subo',
      age: '27',
      email: 'kws3363@gmail.com'
    })
  }
}