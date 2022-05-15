module.exports = (template, product) => {
  let result = template.replace(/{%PRODUCTNAME%}/g, product.productName)
  result = result.replace(/{%IMAGE%}/g, product.image)
  result = result.replace(/{%PRICE%}/g, product.price)
  result = result.replace(/{%FROM%}/g, product.from)
  result = result.replace(/{%NUTRIENTS%}/g, product.nutrients)
  result = result.replace(/{%QUANTITY%}/g, product.quantity)
  result = result.replace(/{%DESCRIPTION%}/g, product.description)
  result = result.replace(/{%ID%}/g, product.id)
  if (!product.organic)
    result = result.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

  return result
}
