import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CountryItem } from '../components';
import { useCountries } from '../../hooks/useCountries';
import { SkeletonCountry } from '../components/country/SkeletonCountry';

export const CountryPage = () => {
	const { country, isLoading, dispatch, getCountryByName } = useCountries();

	const { name } = useParams();

	useEffect(() => {
		dispatch(getCountryByName(name));
	}, [dispatch, getCountryByName, name]);

	return (
		<section className='w-full min-h-screen shadow-2xl bg-[#1B1D1F] absolute md:left-[50%] md:translate-x-[-50%] top-52 md:max-w-[700px] md:rounded-md p-3 md:p-7'>
			{isLoading ? <SkeletonCountry /> : <CountryItem country={country} />}
		</section>
	);
};
