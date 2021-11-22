import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Content from '@/components/Content'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('Content Component', () => {
  it('should have a children on component', () => {
    const { getByText } = render(
      <Content>
        <div>Hello world</div>
      </Content>
    )
    expect(getByText(/Hello world/i)).toBeInTheDocument()
  })
})
