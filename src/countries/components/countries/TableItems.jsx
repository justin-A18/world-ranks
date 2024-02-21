import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export const TableItems = ({ filteredCountries }) => {
	const navigate = useNavigate();

	const handleClickNavigate = (name) => {
		navigate(`/country/${name.toLowerCase()}`);
	};

	return (
		<>
			{filteredCountries.length > 0 ? (
				filteredCountries.map((country) => (
					<tr
						className='h-14 text-[#D2D5DA] hover:bg-[#282B30] cursor-pointer transition-colors duration-300'
						key={country.cca2}
						onClick={() => handleClickNavigate(country.name.common)}>
						<td className='px-2 w-[20%]'>
							<img
								className='w-8 h-5 sm:w-12 sm:h-8 md:w-8 md:h-5 lg:w-12 lg:h-8 object-cover'
								src={country.flags.svg}
								alt={country.flags.alt}
							/>
						</td>
						<td className='px-1 w-[20%]'>{country.name.common}</td>
						<td className='px-1 w-[20%]'>
							{country.population.toLocaleString()}
						</td>
						<td className='px-1 w-[20%]'>{country.area.toLocaleString()}</td>
						<td className='px-1 w-[20%]'>{country.region}</td>
					</tr>
				))
			) : (
				<tr className='absolute  top-4 left-[50%] translate-x-[-50%] text-red-500 text-md'>
					<td>No se encontraron Resultados</td>
				</tr>
			)}
		</>
	);
};

TableItems.propTypes = {
	filteredCountries: PropTypes.array.isRequired,
};
