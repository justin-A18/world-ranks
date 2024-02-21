import { useDispatch, useSelector } from 'react-redux';
import {
	getCountries,
	searchCountry,
	filterByStatus,
	prevCurrentPage,
	nextCurrentPage,
	getCountryByName,
	filterCountryByRegion,
	setNeighbourings,
	sortByPopular,
} from '../store/slice';

export const useCountries = () => {
	const {
		country,
		isLoading,
		currentPage,
		neighbourings,
		countriesPerPage,
		filteredCountries,
	} = useSelector((state) => state.countries);

	const dispatch = useDispatch();

	const lastCountry = currentPage * countriesPerPage;
	const firstCountry = lastCountry - countriesPerPage;
	const currentCountries = filteredCountries.slice(firstCountry, lastCountry);

	const totalPage = Math.ceil(filteredCountries.length / countriesPerPage);
	return {
		country,
		dispatch,
		isLoading,
		totalPage,
		currentPage,
		getCountries,
		sortByPopular,
		neighbourings,
		prevCurrentPage,
		nextCurrentPage,
		searchCountry,
		filterByStatus,
		getCountryByName,
		countriesPerPage,
		currentCountries,
		setNeighbourings,
		filteredCountries,
		filterCountryByRegion,
	};
};
