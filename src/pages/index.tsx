import React from 'react'
import { AppProps } from 'next/app'
import Container from '@/components/Container'

const Home: React.FC<AppProps> = () => {
  return (
    <Container>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Container>
  )
}

export default Home
