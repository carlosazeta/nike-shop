import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setSearchQuery } from '../features/productsSlice'

const SearchBar: React.FC = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector(
		(state: RootState) => state.products.searchQuery
	)

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchQuery(e.target.value))
	}

	return <input type='text' value={searchQuery} onChange={handleSearchChange} />
}

export default SearchBar
