import PropTypes from 'prop-types';

export const CountriesLayout = ({ children }) => {
	return (
		<main className='relative w-full min-h-screen font-vietnamPro'>
			<header className='w-full h-64 bg-hero bg-cover bg-center flex items-center justify-center'>
				<img
					src='../assets/Logo.svg'
					alt='logo'
				/>
			</header>
			{children}
		</main>
	);
};

CountriesLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
