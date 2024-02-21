import { countryApi } from '../../countries/api';
import { loadingCountries, setCountries, setCountry } from './countrySlice';

export const getCountries = () => {
	return async (dispatch) => {
		dispatch(loadingCountries());
		try {
			const { data } = await countryApi.get('all');

			const action = {
				countries: data,
			};

			dispatch(setCountries(action));
		} catch (error) {
			console.error('Error fetching countries:', error);
		}
	};
};

export const getCountryByName = (name) => {
	return async (dispatch) => {
		dispatch(loadingCountries());
		try {
			const { data } = await countryApi.get(`name/${name}`);

			const action = {
				country: data,
			};

			dispatch(setCountry(action));
		} catch (error) {
			console.error('Error fetching countries:', error);
		}
	};
};
