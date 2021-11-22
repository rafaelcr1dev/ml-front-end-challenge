import { LIMIT_RESEARCH_ITEMS } from '../../config/consts'
import { endpoints } from '../../config/endpoints'

export const getSearchItems = async (
  term: string,
  limit = LIMIT_RESEARCH_ITEMS
) =>
  fetch(endpoints.getSearchItems(term, limit)).then(response => response.json())
