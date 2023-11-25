import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NikeProduct } from '../types/types'

interface ProductsState {
	products: NikeProduct[]
	searchQuery: string
	isSearchModalOpen: boolean
}

const initialState: ProductsState = {
	products: [],
	searchQuery: '',
	isSearchModalOpen: false,
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<NikeProduct[]>) => {
			state.products = action.payload
		},
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload
			// Abre la modal cuando hay una búsqueda, cierra cuando la búsqueda está vacía
			state.isSearchModalOpen = action.payload.length > 0
		},
		openSearchModal: (state) => {
			state.isSearchModalOpen = true
		},
		closeSearchModal: (state) => {
			state.isSearchModalOpen = false
		},
	},
})

export const { setProducts, setSearchQuery } = productsSlice.actions

export default productsSlice.reducer
