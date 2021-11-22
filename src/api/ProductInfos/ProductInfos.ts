import { endpoints } from '../../config/endpoints'

export const getProductInfos = async (id: string) =>
  fetch(endpoints.getProductInfo(id)).then(response => response.json())
