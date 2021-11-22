import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Container from '@/components/Container'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('Container Component', () => {
  it('should have a children on component', () => {
    const { getByText } = render(
      <Container>
        <div>Hello world</div>
      </Container>
    )
    expect(getByText(/Hello world/i)).toBeInTheDocument()
  })
})
