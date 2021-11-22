import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Feedback from '@/components/Feedback'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('Feedback Component', () => {
  it('should have a children on component', () => {
    const { getByText } = render(
      <Feedback>
        <div>Hello world</div>
      </Feedback>
    )
    expect(getByText(/Hello world/i)).toBeInTheDocument()
  })

  it('should have a children on component with term', () => {
    const { getByText } = render(
      <Feedback term={'PS5'}>
        <>término</>
      </Feedback>
    )
    expect(getByText(/término/i)).toBeInTheDocument()
    expect(getByText(/PS5/i)).toBeInTheDocument()
  })
})
