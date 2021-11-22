import React from 'react'
import { render } from '@testing-library/react'

import BreadCrumb from '@/components/BreadCrumb'

describe('BreadCrumb Component', () => {
  it('should not have categories', () => {
    const categories: string[] = []
    const { container } = render(<BreadCrumb categories={categories} />)

    expect(container.querySelectorAll('li').length).toEqual(0)
  })

  it('should have two categories', () => {
    const categories: string[] = ['A', 'B']
    const { container } = render(<BreadCrumb categories={categories} />)

    expect(container.querySelectorAll('li').length).toBe(2)
  })
})
