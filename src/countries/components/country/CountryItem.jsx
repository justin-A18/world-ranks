import PropTypes from 'prop-types';
import { RowCountry } from './RowCountry';
import { useNavigate } from 'react-router-dom';
import { useCountries } from '../../../hooks/useCountries';
import { useEffect } from 'react';
import { NeighbouringItem } from './NeighbouringItem';

export const CountryItem = ({ country }) => {
	const navigate = useNavigate();
	const { neighbourings, setNeighbourings, dispatch } = useCountries();

	useEffect(() => {
		dispatch(setNeighbourings(country.subregion));
	}, [dispatch, setNeighbourings, country.subregion]);

	const handleClickNavigate = () => {
		navigate('/');
	};

	const languages = country?.languages
		? Object.values(country?.languages).join(', ')
		: 'none';

	const currencies = country?.currencies
		? Object.values(country?.currencies)
				.map((curr) => `${curr.name} (${curr.symbol})`)
				.join(', ')
		: 'none';

	return (
		<article className='w-full h-full'>
			<header className='absolute w-full flex items-center justify-center top-[-3rem] left-[50%] translate-x-[-50%]'>
				<img
					className='w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[10rem]  object-cover object-center rounded-lg'
					src={country.flags?.svg}
					alt={country.name?.common}
				/>

				<button
					className='absolute left-5 top-[-8rem] sm:top-16 size-10 flex items-center justify-center rounded-full bg-[#282B30] text-[#D2D5DA] hover:bg-[#D2D5DA] hover:text-[#282B30] transition-colors duration-300'
					onClick={handleClickNavigate}>
					<i className='bx bx-left-arrow-alt bx-sm'></i>
				</button>
			</header>

			<div className='w-full h-full mt-28 flex items-center flex-col gap-8 justify-center'>
				<header className='text-[#D2D5DA] text-center'>
					<h2 className='text-2xl sm:text-3xl mb-2'>{country.name?.common}</h2>
					<p className='text-lg font-semibold'>{country?.region}</p>
				</header>

				<div className='flex items-center w-full flex-wrap gap-4 sm:gap-0 justify-around'>
					<div className='flex rounded-lg bg-[#282B30] text-[#D2D5DA] items-center'>
						<h3 className='text-sm md:text-base p-3 sm:py-4 sm:px-6 border-r-[1px] border-black'>
							Population
						</h3>
						<p className='text-sm md:text-base p-3 sm:py-4 sm:px-6'>
							{country.population?.toLocaleString()}
						</p>
					</div>
					<div className='flex rounded-lg bg-[#282B30] text-[#D2D5DA] items-center'>
						<h3 className='text-sm md:text-base p-3 sm:py-4 sm:px-6 border-r-[1px] border-black'>
							Area (km²)
						</h3>
						<p className='text-sm md:text-base p-3 sm:py-4 sm:px-6'>
							{country.area?.toLocaleString()}
						</p>
					</div>
				</div>

				<div className='w-full text-[#6C727F]'>
					<RowCountry
						title={'Capital'}
						info={country?.capital}
					/>

					<RowCountry
						title={'Subregion'}
						info={country?.subregion}
					/>

					<RowCountry
						title={'Language'}
						info={languages}
					/>

					<RowCountry
						title={'Currencies'}
						info={currencies}
					/>

					<RowCountry
						title={'Continents'}
						info={country?.continents}
					/>
				</div>

				<div className='w-full text-[#6C727F] flex flex-col gap-5'>
					<h3>Neighbouring Countries</h3>
					<div className='text-[#D2D5DA] w-full grid place-content-center sm:place-content-start grid-cols-[repeat(3,minmax(0,100px))] gap-2'>
						{neighbourings.map((neighbouring) => (
							<NeighbouringItem
								key={neighbouring.cca2}
								neighbouring={neighbouring}
							/>
						))}
					</div>
				</div>
			</div>
		</article>
	);
};

CountryItem.propTypes = {
	country: PropTypes.object.isRequired,
};
