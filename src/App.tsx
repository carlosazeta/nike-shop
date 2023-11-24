import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from './features/productsSlice'
import { fetchProducts } from './data/productsMock'
import ProductsList from './components/ProductsList'
import './App.css'
import Header from './components/Header'
import LandingImage from './components/LandingImage'

const App: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchProducts().then((products) => {
			dispatch(setProducts(products))
		})
	}, [dispatch])

	return (
		<>
			<Header />
			<LandingImage />
			<ProductsList />
		</>
	)
}

export default App
