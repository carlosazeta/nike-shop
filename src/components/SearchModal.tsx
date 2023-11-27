import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import SearchBar from './SearchBar'

const SearchModal: React.FC = () => {
	const { products, searchQuery } = useSelector(
		(state: RootState) => state.products
	)

	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const handleClickInside = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<div className='products-modal-wrapper' onClick={handleClickInside}>
			<div className='products-modal-searchbar'>
				<SearchBar />
			</div>
			<div className='products-modal-list'>
				{filteredProducts.slice(0, 7).map((product) => (
					<div className='product-item' key={product.id}>
						<img src={product.image} alt={product.title} />
						<p>{product.title}</p>
						<p>{product.category}</p>
						<p>{product.price} €</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default SearchModal
