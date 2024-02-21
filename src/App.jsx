import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, CountryPage } from './countries/pages';
import { CountriesLayout } from './countries/layout/CountriesLayout';

export const App = () => {
	return (
		<CountriesLayout>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>

				<Route
					path='/country/:name'
					element={<CountryPage />}
				/>

				<Route
					path='/*'
					element={<Navigate to='/' />}
				/>
			</Routes>
		</CountriesLayout>
	);
};
