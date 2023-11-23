import React from 'react'
import { NikeProduct } from '../types/types.ts' // Asumiendo que tienes un archivo de tipos

interface ProductCardProps {
	product: NikeProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div>
			<h3>{product.title}</h3>
			{/* Otros detalles del producto */}
		</div>
	)
}

export default ProductCard
