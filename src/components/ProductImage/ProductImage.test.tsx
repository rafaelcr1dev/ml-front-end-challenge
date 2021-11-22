import React from 'react'
import { render } from '@testing-library/react'

import ProductImage from '@/components/ProductImage'

describe('ProductImage Component', () => {
  it('should display only one image', () => {
    const { container } = render(
      <ProductImage url="mercadolibre.png" title="Mercado Libre" />
    )

    const image = container.querySelector('img')
    const images = container.querySelectorAll('img')

    expect(images).toHaveLength(1)

    expect(image).toHaveAttribute('itemprop', 'image')
    expect(image).toHaveAttribute('src', 'mercadolibre.png')
    expect(image).toHaveAttribute('alt', 'Mercado Libre')
  })
})
