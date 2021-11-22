import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import nextAbsoluteUrl from 'next-absolute-url'

import Container from '@/components/Container'
import Content from '@/components/Content'
import BreadCrumb from '@/components/BreadCrumb'
import { IProductItem, ISearchResponse } from '../../interfaces'
import ProductList from '@/components/ProductList'
import Feedback from '@/components/Feedback'

type Props = {
  term?: string
  items: IProductItem[]
  categories: string[]
}

const SearchResult: React.FC<Props> = ({ term, items, categories }) => {
  return (
    <Container>
      <>
        <Head>
          <title>{term} | MercadoLibre</title>
        </Head>
        <Content>
          {categories && categories.length > 0 && (
            <BreadCrumb categories={categories} />
          )}
          {items && items.length > 0 ? (
            <ProductList products={items} />
          ) : (
            <Feedback term={term}>
              <>
                No se encontraron productos que coincidan con su búsqueda para
                el término
              </>
            </Feedback>
          )}
        </Content>
      </>
    </Container>
  )
}

export default SearchResult

export const getServerSideProps: GetServerSideProps<any> = async ({
  req,
  query
}) => {
  try {
    if (!query.search) throw Error

    const { origin } = nextAbsoluteUrl(req, req.headers.host)
    const { items, categories }: ISearchResponse = await fetch(
      `${origin}/api/items?q=${query.search}`
    ).then(res => res.json())

    return {
      props: {
        term: query.search,
        items,
        categories
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      },
      props: {}
    }
  }
}
