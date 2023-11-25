import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './features/productsSlice'
import { fetchProducts } from './data/productsMock'
import ProductsList from './components/ProductsList'
import './App.css'
import Header from './components/Header'
import LandingImage from './components/LandingImage'
import { RootState } from './store'
import SearchModal from './components/SearchModal'

const App: React.FC = () => {
	const dispatch = useDispatch()

	const isSearchModalOpen = useSelector(
		(state: RootState) => state.products.isSearchModalOpen
	)

	useEffect(() => {
		fetchProducts().then((products) => {
			dispatch(setProducts(products))
		})
	}, [dispatch])

	return (
		<>
			<Header />
			{isSearchModalOpen && <SearchModal />}
			<LandingImage />
			<ProductsList />
		</>
	)
}

export default App
