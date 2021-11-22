import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import nextAbsoluteUrl from 'next-absolute-url'

import Container from '@/components/Container'
import BreadCrumb from '@/components/BreadCrumb'
import SingleProduct from '@/components/SingleProduct'
import Content from '@/components/Content'

import { IProductResponse } from '../../interfaces'

export default function ProductPage({ item, categories }: IProductResponse) {
  return (
    <Container>
      <>
        <Head>
          <title>{item?.title} | Mercado Libre</title>
        </Head>
        <Content>
          {categories && categories.length > 0 && (
            <BreadCrumb categories={categories} />
          )}
          {item && <SingleProduct item={item} />}
        </Content>
      </>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async ({
  req,
  query
}) => {
  if (!query.id) throw Error

  try {
    const { origin } = nextAbsoluteUrl(req, req.headers.host)
    const { item, categories }: IProductResponse = await fetch(
      `${origin}/api/items/${query.id}`
    ).then(res => res.json())

    return {
      props: {
        term: query.id,
        item,
        categories
      }
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      },
      props: {}
    }
  }
}
