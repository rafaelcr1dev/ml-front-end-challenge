import { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'

import apiClient from '../../../api'
import { getCategoryWithOccurrences } from '../../../helpers'
import { serializeSearchItems } from '../../../serializes'
import { AUTHOR } from '../../../config/consts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const term: string = req.query.q as string

    if (!term) return res.send(StatusCodes.BAD_REQUEST)

    const { results: searchItems } = await apiClient.getSearchItems(term)

    let finalResponse = {
      author: AUTHOR,
      categories: [],
      items: []
    }

    if (searchItems.length === 0) res.send(finalResponse)

    const firstSearchItem = searchItems[0]
    const {
      prices: {
        presentation: { display_currency: currencyId }
      }
    } = firstSearchItem

    const categoryWithMostOccurence = getCategoryWithOccurrences(searchItems)
    const { path_from_root } = await apiClient.getCategories(
      categoryWithMostOccurence
    )
    const categories = path_from_root?.map((category: any) => category.name)
    const currencyDetails = await apiClient.getCurrencyInfos(currencyId)
    const items = serializeSearchItems(searchItems, currencyDetails)

    finalResponse = {
      ...finalResponse,
      categories,
      items
    }

    return res.status(StatusCodes.OK).json(finalResponse)
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send('Internal server error')
  }
}
