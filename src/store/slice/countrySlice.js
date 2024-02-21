import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
	name: 'country',
	initialState: {
		//<========Countries=========>

		countries: [],
		searchText: '',
		isLoading: true,

		//<========Filters=========>

		filters: {
			region: 'all',
			status: {
				independent: true,
				memberUnited: true,
			},
		},
		filteredCountries: [],
		filteredCountriesInit: [],
		sortBy: '',

		//<========Pagination=========>

		currentPage: 1,
		countriesPerPage: 10,

		//<========Country=========>

		country: {},
		neighbourings: [],
	},

	reducers: {
		loadingCountries: (state) => {
			state.isLoading = true;
		},
		setCountries: (state, action) => {
			state.isLoading = false;
			state.countries = action.payload.countries;
			state.filteredCountries = action.payload.countries;
		},
		filterCountryByRegion: (state, action) => {
			const { region } = action.payload;

			state.filters.region = region;
			if (state.filters.region === 'all') {
				state.filteredCountries = state.countries;
			} else {
				state.filteredCountries = state.countries.filter(
					(country) => country.region === state.filters.region
				);
				state.filteredCountriesInit = state.filteredCountries;
			}

			state.currentPage = 1;
		},
		filterByStatus: (state, action) => {
			const { status } = action.payload;
			const { region } = state.filters;

			state.filters.status = status;

			const isIndependent = status.independent;
			const isMemberUnited = status.memberUnited;

			if (!isIndependent && !isMemberUnited) {
				state.filteredCountries =
					region === 'all' ? state.countries : state.filteredCountriesInit;
			} else {
				state.filteredCountries = state.filteredCountries.filter((country) => {
					const meetsStatusCriteria =
						(isIndependent && country.independent) ||
						(isMemberUnited && country.unMember);

					return meetsStatusCriteria;
				});
			}

			state.currentPage = 1;
		},
		sortByPopular: (state, action) => {
			state.sortBy = action.payload;

			if (state.sortBy === 'morepopulation') {
				state.filteredCountries = state.filteredCountries.sort(
					(first, second) => {
						return second.population - first.population;
					}
				);
			} else {
				state.filteredCountries = state.filteredCountries.sort(
					(first, second) => {
						return first.population - second.population;
					}
				);
			}
		},
		searchCountry: (state, action) => {
			const { value } = action.payload;
			state.searchText = value;

			if (state.searchText === '')
				return (state.filteredCountries = state.countries);

			state.filteredCountries = state.countries.filter((country) => {
				return (
					country.name.common
						.toLowerCase()
						.trim()
						.includes(state.searchText.toLowerCase().trim()) ||
					country.region
						.toLowerCase()
						.trim()
						.includes(state.searchText.toLowerCase().trim()) ||
					(country.subregion &&
						country.subregion
							.toLowerCase()
							.trim()
							.includes(state.searchText.toLowerCase().trim()))
				);
			});

			state.currentPage = 1;
		},
		setCountry: (state, action) => {
			state.isLoading = false;
			state.country = action.payload.country[0];
		},
		setNeighbourings: (state, action) => {
			state.neighbourings = state.countries
				.filter((country) => {
					return country.subregion === action.payload;
				})
				.slice(0, 3);
		},
		nextCurrentPage: (state) => {
			state.isLoading = false;
			state.currentPage = state.currentPage + 1;
		},
		prevCurrentPage: (state) => {
			state.isLoading = false;
			state.currentPage = state.currentPage - 1;
		},
	},
});

export const {
	setCountry,
	setCountries,
	sortByPopular,
	searchCountry,
	filterByStatus,
	nextCurrentPage,
	prevCurrentPage,
	loadingCountries,
	setNeighbourings,
	filterCountryByRegion,
} = countrySlice.actions;
