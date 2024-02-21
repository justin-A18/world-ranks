import { useCountries } from '../../hooks/useCountries';
import { continents } from '../data/continents';
import { useCountryFilters } from '../hooks/useCountryFilters';

export const SideBar = () => {
	const {
		select,
		isMember,
		activeRegion,
		isIndependent,
		handleClickRegion,
		handleChangeMember,
		handleChangeSelect,
		handleChangeIndependent,
	} = useCountryFilters();

	const { 
		dispatch, 
		totalPage, 
		currentPage, 
		prevCurrentPage, 
		nextCurrentPage 
	} = useCountries();

	return (
		<aside className='w-full text-[#6C727F] flex flex-col gap-8'>
			<div className='w-full flex flex-col gap-4'>
				<h3>
					<small>Sort by</small>
				</h3>
				<select
					className='bg-transparent w-full border-2 border-[#6C727F] p-2 rounded-md text-[#D2D5DA] text-sm'
					value={select}
					onChange={handleChangeSelect}>
					<option
						value=''
						disabled>
						Select option
					</option>
					<option value='morepopulation'>More popular</option>
					<option value='lesspopulation'>Less popular</option>
				</select>
			</div>

			<div className='flex flex-col gap-4'>
				<h3>
					<small>Region</small>
				</h3>
				<ul className='flex flex-wrap gap-4 justify-center md:justify-normal'>
					<li
						onClick={() => handleClickRegion('all')}
						className={`px-4 py-2 rounded-lg text-sm cursor-pointer hover:text-[#D2D5DA] hover:bg-[#282B30] transition-colors duration-300 ${
							activeRegion === 'all' ? 'bg-[#282B30] text-[#D2D5DA]' : ''
						}`}>
						All
					</li>
					{continents.map((item, index) => (
						<li
							className={`px-4 py-2 rounded-lg text-sm cursor-pointer hover:text-[#D2D5DA] hover:bg-[#282B30] transition-colors duration-300 ${
								activeRegion === item ? 'bg-[#282B30] text-[#D2D5DA]' : ''
							} `}
							key={index}
							onClick={() => handleClickRegion(item)}>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3>
					<small>Status</small>
				</h3>
				<div className='flex flex-col gap-3'>
					<div className='flex items-center gap-4 text-sm text-[#D2D5DA]'>
						<input
							id='member'
							name='member'
							type='checkbox'
							value={isMember}
							onChange={handleChangeMember}
						/>
						<label
							className='check inline-block relative cursor-pointer'
							htmlFor='member'>
							Member of the United Nations
							<img
								className='absolute z-10 top-0 left-[-2rem] size-6 opacity-0 img-hidden'
								src='../assets/Done_round.svg'
								alt='done'
							/>
						</label>
					</div>
					<div className='flex items-center gap-4 text-sm text-[#D2D5DA]'>
						<input
							type='checkbox'
							id='independent'
							name='independent'
							value={isIndependent}
							onChange={handleChangeIndependent}
						/>

						<label
							className='check inline-block relative cursor-pointer'
							htmlFor='independent'>
							independent
							<img
								className='absolute z-10 top-0 left-[-2rem] size-6 opacity-0 img-hidden'
								src='../assets/Done_round.svg'
								alt='done'
							/>
						</label>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3>
					<small>Pagination</small>
				</h3>
				<div className='flex items-center gap-2'>
					<button
						className={`bg-[#4E80EE] text-white rounded-sm p-[2px] hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}
						onClick={() => dispatch(prevCurrentPage())}
						disabled={currentPage <= 1}>
						<i className='bx bxs-left-arrow bx-sm'></i>
					</button>
					<button
						className='bg-[#4E80EE] text-white rounded-sm p-[2px] hover:opacity-80 transition-opacity duration-300 flex items-center justify-center'
						onClick={() => dispatch(nextCurrentPage())}
						disabled={currentPage === totalPage}>
						<i className='bx bxs-right-arrow bx-sm'></i>
					</button>
				</div>
			</div>
		</aside>
	);
};
