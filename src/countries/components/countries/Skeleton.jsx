export const Skeleton = () => {
	const arr = new Array(10).fill(0);
	return (
		<>
			{arr.map((_, i) => (
				<tr
					className='h-14 animate-pulse'
					key={i}>
					<td>
						<div className='w-5 h-5 rounded-full sm:w-8 sm:h-8 md:w-5 md:h-5 lg:w-8 lg:h-8 bg-[#3C3F44]'></div>
					</td>
					<td className='w-[20%] px-1'>
						<div className='w-8 h-3 rounded-md sm:w-12 sm:h-3 md:w-8 md:h-5 lg:w-12 lg:h-3 bg-[#3C3F44]'></div>
					</td>
					<td className='w-[20%] px-1'>
						<div className='w-8 h-3 rounded-md sm:w-12 sm:h-3 md:w-8 md:h-5 lg:w-12 lg:h-3 bg-[#3C3F44]'></div>
					</td>
					<td className='w-[20%] px-1'>
						<div className='w-8 h-3 rounded-md sm:w-12 sm:h-3 md:w-8 md:h-5 lg:w-12 lg:h-3 bg-[#3C3F44]'></div>
					</td>
					<td className='w-[20%] px-1'>
						<div className='w-8 h-3 rounded-md sm:w-12 sm:h-3 md:w-8 md:h-5 lg:w-12 lg:h-3 bg-[#3C3F44]'></div>
					</td>
				</tr>
			))}
		</>
	);
};
