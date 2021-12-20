const getData = (str) => {
  return fetch(
    `https://test-3fb6e-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`) //строчка url по которой находятся данные которые нам необходимо получить
    .then((response) => { //Response объект ответа от сервера
      return response.json(); //конвертирует в нужную структуру через json
    })

};

export default getData;