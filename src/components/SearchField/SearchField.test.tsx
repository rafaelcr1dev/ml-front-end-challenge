import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import singletonRouter from 'next/router'
import SearchField from '@/components/SearchField'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('SearchField Component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })

  it('should redirect to /items?search={term} after search', () => {
    const { getByPlaceholderText, getByRole } = render(<SearchField />)
    const term = 'PS5'

    expect(singletonRouter.asPath).toEqual('/')
    userEvent.type(getByPlaceholderText('Nunca dejes de buscar'), term)
    userEvent.click(getByRole('button'))
    expect(singletonRouter.asPath).toEqual(encodeURI(`/items?search=${term}`))
  })
})
