import { endpoints } from '../../config/endpoints'

export const getCategories = async (category_id: string) =>
  fetch(endpoints.getCategories(category_id)).then(response => response.json())
