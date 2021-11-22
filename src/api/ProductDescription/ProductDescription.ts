import { endpoints } from '../../config/endpoints'

export const getProductDescription = async (id: string) =>
  fetch(endpoints.getProductDescription(id)).then(response => response.json())
