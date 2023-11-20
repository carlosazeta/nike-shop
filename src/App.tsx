import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import { setProducts, setSearchQuery } from './features/productsSlice'
import { fetchProducts } from './data/productsMock' // Ajusta según tus métodos de carga

function App() {
	const dispatch = useDispatch<AppDispatch>()
	const { products, searchQuery } = useSelector(
		(state: RootState) => state.products
	)

	useEffect(() => {
		fetchProducts().then((products) => {
			dispatch(setProducts(products))
		})
	}, [dispatch])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchQuery(e.target.value))
	}

	return (
		<div>
			<input type='text' value={searchQuery} onChange={handleSearchChange} />
			{products
				.filter((product) =>
					product.title.toLowerCase().includes(searchQuery.toLowerCase())
				)
				.map((product) => (
					<div key={product.id}>
						<h3>{product.title}</h3>
						{/* Otros detalles del producto */}
					</div>
				))}
		</div>
	)
}

export default App
