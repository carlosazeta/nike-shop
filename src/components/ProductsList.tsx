import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import ProductCard from './ProductCard'

const ProductsList: React.FC = () => {
	const { products } = useSelector((state: RootState) => state.products)

	return (
		<div>
			<h2 className='featured-products-title'>Featured Products</h2>
			<div className='products-grid'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductsList
