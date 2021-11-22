import { StatusCodes } from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'

import { AUTHOR } from '../../../config/consts'
import { IProductResponse } from '../../../interfaces'

import apiClient from '../../../api/index'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id: string = req.query.id as string

    let finalResponse: IProductResponse = {
      author: AUTHOR,
      categories: [],
      item: null
    }

    const [productDetails, productDescription] = await Promise.all([
      apiClient.getProductInfos(id),
      apiClient.getProductDescription(id)
    ])

    if (!productDetails) {
      return res.status(StatusCodes.NOT_FOUND).json(finalResponse)
    }

    const { path_from_root } = await apiClient.getCategories(
      productDetails.category_id
    )

    const categories: string[] = path_from_root?.map(
      (category: any) => category.name
    )

    const currencyDetails = await apiClient.getCurrencyInfos(
      productDetails.currency_id
    )

    const item = {
      id: productDetails.id,
      title: productDetails.title,
      price: {
        currency: currencyDetails.symbol,
        amount: productDetails.price,
        decimals: currencyDetails.decimal_places
      },
      picture:
        productDetails.pictures[0] && productDetails.pictures[0].secure_url,
      condition: productDetails.condition,
      free_shipping: productDetails.shipping.free_shipping,
      sold_quantity: productDetails.sold_quantity,
      description: productDescription.plain_text
    }

    finalResponse = {
      ...finalResponse,
      categories,
      item
    }

    return res.status(StatusCodes.OK).json(finalResponse)
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send('Internal server error')
  }
}
