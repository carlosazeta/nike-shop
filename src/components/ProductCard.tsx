import React from 'react'
import { NikeProduct } from '../types/types.ts' // Asumiendo que tienes un archivo de tipos

interface ProductCardProps {
	product: NikeProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div className='product-card'>
			<img src={product.image} alt={product.title} />
			<h3>{product.title}</h3>
			<h4>{product.description}</h4>
			<span>{product.price} €</span>
		</div>
	)
}

export default ProductCard
