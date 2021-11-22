import React from 'react'
import NumberFormat from 'react-number-format'

import { IPrice } from '../../interfaces'

type Props = {
  children?: React.ReactNode
  className?: string
  price: IPrice
}

const ProductPrice: React.FC<Props> = ({ className, price, children }) => {
  const formatPrice = (value: string) => {
    const comma = value.indexOf(',') !== -1

    let priceFormatted = (
      <span itemProp="price" data-testid="price-amount" data-value={value}>
        {value}
      </span>
    )

    if (comma) {
      const valueArray = value.split(',')
      const decimals: number = parseInt(valueArray[valueArray.length - 1])
      let decimalsString = String(decimals)

      if (decimals < 10) {
        decimalsString = (decimals * 10).toString()
      }

      priceFormatted = (
        <span
          itemProp="price"
          data-testid="price-amount"
          data-value={valueArray[0]}
        >
          {valueArray[0]}
          <sup data-testid="price-decimals">{decimalsString}</sup>
        </span>
      )
    }

    return priceFormatted
  }

  return (
    <div
      className={className}
      itemScope
      itemType="https://schema.org/PriceSpecification"
    >
      <meta itemProp="price" content={String(price.amount)} />
      <meta itemProp="priceCurrency" content="ARS" />

      <NumberFormat
        value={price.amount}
        prefix={`${price.currency} `}
        decimals={price.decimals}
        thousandSeparator="."
        decimalSeparator=","
        displayType="text"
        renderText={formattedValue => formatPrice(formattedValue)}
      />
      {children}
    </div>
  )
}

export default ProductPrice
