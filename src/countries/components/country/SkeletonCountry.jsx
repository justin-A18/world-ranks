export const SkeletonCountry = () => {
	return (
		<article className='w-full h-full animate-pulse'>
			<header className='absolute w-full flex items-center justify-center top-[-3rem] left-[50%] translate-x-[-50%]'>
				<div className='w-[15rem] sm:w-[20rem] h-[10rem] object-cover object-center rounded-lg block bg-[#3C3F44]'></div>
			</header>

			<div className='w-full h-full mt-28 flex items-center flex-col gap-4 justify-center'>
				<header>
					<div className='w-[20rem] h-7 mt-2 bg-[#3C3F44] block'></div>
					<div className='w-[20rem] h-7 mt-2 bg-[#3C3F44] block'></div>
				</header>

				<div className='flex items-center w-full flex-wrap gap-4	 sm:gap-0 justify-around mt-2'>
					<div className='flex rounded-lg bg-[#282B30] text-[#D2D5DA] items-center'>
						<div className='w-[5rem] h-[3rem] block border-r-[1px] border-black'></div>
						<div className='w-[5rem] h-[3rem] block border-r-[1px] border-black'></div>
					</div>
					<div className='flex rounded-lg bg-[#282B30] text-[#D2D5DA] items-center'>
						<div className='w-[5rem] h-[3rem] block border-r-[1px] border-black'></div>
						<div className='w-[5rem] h-[3rem] block border-r-[1px] border-black'></div>
					</div>
				</div>

				<div className='w-full h-full mt-4 text-[#6C727F]'>
					<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'></div>
					<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'></div>
					<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'></div>
					<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'></div>
					<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'></div>
				</div>
			</div>
		</article>
	);
};
