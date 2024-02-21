import { useState } from 'react';
import { useCountries } from '../../../hooks/useCountries';

export const FoundCountry = () => {
	const [searchText, setSearchText] = useState('');
	const { filteredCountries, searchCountry, dispatch, currentPage, totalPage } =
		useCountries();

	const handleChangeSearch = ({ target }) => {
		const { value } = target;
		setSearchText(value);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		dispatch(searchCountry({ value: searchText }));
	};

	return (
		<header className='w-full flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center justify-between min-h-20 mb-4'>
			<h2 className='text-[#6C727F] font-semibold text-md'>
				Found {filteredCountries.length} countries | Page {currentPage}/
				{totalPage}
			</h2>

			<form
				className='w-full sm:w-[20rem] h-10 relative'
				onSubmit={handleSubmitForm}>
				<div className='w-full h-full'>
					<label
						htmlFor='search-id'
						className='absolute top-2 left-2'>
						<img
							src='../../assets/Search.svg'
							alt='search'
						/>
					</label>
					<input
						type='search'
						id='search-id'
						onChange={handleChangeSearch}
						value={searchText}
						className='w-full h-full text-sm pl-10 bg-[#282B30] text-[#D2D5DA] rounded-lg outline-none'
						name='search'
						placeholder='Search by Name, Region, Subregion'
					/>
				</div>
			</form>
		</header>
	);
};
