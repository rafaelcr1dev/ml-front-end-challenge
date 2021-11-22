export const serializeSearchItems = (items: any[], currencyDetails: any) => {
  return items?.map((searchItem: any) => ({
    id: searchItem.id,
    title: searchItem.title,
    picture: searchItem.thumbnail.replace('http:', 'https:'),
    condition: searchItem.condition,
    state_name: searchItem.address.state_name,
    free_shipping: searchItem.shipping.free_shipping,
    price: {
      currency: currencyDetails.symbol,
      decimals: currencyDetails.decimal_places,
      amount: searchItem.price
    }
  }))
}
