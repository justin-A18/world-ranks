import { configureStore } from '@reduxjs/toolkit';
import { countrySlice } from './slice/countrySlice';

export const store = configureStore({
	reducer: {
		countries: countrySlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
