import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	closeSearchModal,
	setProducts,
	setSearchQuery,
} from './features/productsSlice'
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

	const handleCloseModal = () => {
		if (isSearchModalOpen) {
			dispatch(closeSearchModal())
			dispatch(setSearchQuery(''))
		}
	}

	useEffect(() => {
		fetchProducts().then((products) => {
			dispatch(setProducts(products))
		})
	}, [dispatch])

	return (
		<div onClick={handleCloseModal}>
			<Header />
			{isSearchModalOpen && <SearchModal />}
			<LandingImage />
			<ProductsList />
		</div>
	)
}

export default App
