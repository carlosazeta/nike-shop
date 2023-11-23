import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import ProductCard from './ProductCard'

const ProductsList: React.FC = () => {
	const { products, searchQuery } = useSelector(
		(state: RootState) => state.products
	)

	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<div>
			{filteredProducts.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductsList
