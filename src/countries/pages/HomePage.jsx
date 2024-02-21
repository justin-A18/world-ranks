import { useEffect } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { SideBar, Skeleton, TableItems, FoundCountry } from '../components';

export const HomePage = () => {
	const {
		dispatch,
		isLoading,
		getCountries,
		currentCountries,
	} = useCountries();

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch, getCountries]);

	return (
		<section className='w-full min-h-screen shadow-2xl bg-[#1B1D1F] absolute xl:left-[50%] xl:translate-x-[-50%] top-48 xl:max-w-[1200px] xl:rounded-md p-3 md:p-7'>
			<FoundCountry />

			<div className='grid md:grid-cols-[20rem_1fr] gap-8 w-full h-full'>
				<SideBar />
				<table className='w-full border-collapse h-12'>
					<thead className='text-[10px] sm:text-sm md:text-[10px] lg:text-sm border-b-2 text-left border-[#292C32]'>
						<tr className='text-[#6C727F]'>
							<th className='px-3 py-2 m-0'>Flag</th>
							<th className='px-3 py-2 m-0'>Name</th>
							<th className='px-3 py-2 m-0'>Population</th>
							<th className='px-3 py-2 m-0'>Area (km²)</th>
							<th className='px-3 py-2 m-0'>Region</th>
						</tr>
					</thead>

					<tbody className='text-[10px] sm:text-sm md:text-[10px] lg:text-sm w-full relative'>
						{isLoading ? (
							<Skeleton />
						) : (
							<TableItems filteredCountries={currentCountries} />
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
};
