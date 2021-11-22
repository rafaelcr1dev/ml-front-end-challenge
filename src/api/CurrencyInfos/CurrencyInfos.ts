import { endpoints } from '../../config/endpoints'

export const getCurrencyInfos = async (currency_id: string) =>
  fetch(endpoints.getCurrencyInfo(currency_id)).then(response =>
    response.json()
  )
