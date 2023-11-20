import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NikeProduct } from '../types/types'

interface ProductsState {
	products: NikeProduct[]
	searchQuery: string
}

const initialState: ProductsState = {
	products: [],
	searchQuery: '',
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
		},
	},
})

export const { setProducts, setSearchQuery } = productsSlice.actions

export default productsSlice.reducer
