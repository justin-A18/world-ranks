import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NeighbouringItem = ({ neighbouring }) => {
	return (
		<Link
			className='w-full h-full'
			to={`/country/${neighbouring.name?.common}`}>
			<article className='flex flex-col items-center gap-2 w-full h-full'>
				<img
					className='rounded-sm w-full h-[4rem] object-cover'
					src={neighbouring.flags?.svg}
					alt={neighbouring.name?.common}
				/>

				<h4 className='text-center'>{neighbouring.name?.common}</h4>
			</article>
		</Link>
	);
};

NeighbouringItem.propTypes = {
	neighbouring: PropTypes.object.isRequired,
};
