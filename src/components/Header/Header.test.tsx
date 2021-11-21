import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Header from '@/components/Header'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('Header Component', () => {
  it('should have a logo with link and form on component', () => {
    const { container } = render(<Header />)
    const selectorLink = 'a[title="Mercado Libre"]'
    const selectorForm = 'form'

    expect(container.querySelectorAll(selectorLink)).toHaveLength(1)
    expect(container.querySelectorAll(selectorForm)).toHaveLength(1)
  })
})
