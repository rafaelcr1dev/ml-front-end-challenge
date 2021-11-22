import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  className?: string
  title: string
  children?: React.ReactNode
}

const ProductName: React.FC<Props> = ({ className, title, children }) => {
  const router = useRouter()
  const Tag = router.pathname === '/items/[id]' ? 'h1' : 'h2'

  return (
    <Tag className={className} data-testid="product-name">
      <span itemProp="name">{title}</span>
      {children}
    </Tag>
  )
}

export default ProductName
