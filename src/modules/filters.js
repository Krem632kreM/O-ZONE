export const searchFilters = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilters = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })
}