import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from './features/productsSlice'
import { fetchProducts } from './data/productsMock'
import SearchBar from './components/SearchBar'
import ProductsList from './components/ProductsList'

const App: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchProducts().then((products) => {
			dispatch(setProducts(products))
		})
	}, [dispatch])

	return (
		<div>
			<SearchBar />
			<ProductsList />
		</div>
	)
}

export default App
