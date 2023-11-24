import SearchBar from './SearchBar'

const Header: React.FC = () => {
	return (
		<header className='header-wrapper'>
			<a className='logo-link' href='/'>
				Nike.com
			</a>
			<SearchBar />
		</header>
	)
}

export default Header
