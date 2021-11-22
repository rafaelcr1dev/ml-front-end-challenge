import React from 'react'

type Props = {
  className?: string
  url: string
  width?: string
  title: string
}

const ProductImage: React.FC<Props> = ({ className, url, width, title }) => (
  <div className={className} itemScope>
    <img itemProp="image" src={url} width={width} alt={title} />
  </div>
)

export default ProductImage
