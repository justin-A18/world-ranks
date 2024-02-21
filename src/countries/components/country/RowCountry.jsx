import PropTypes from 'prop-types';

export const RowCountry = ({ title, info }) => {
	return (
		<div className='w-full flex items-center justify-between h-12 p-3 border-t-[1px] border-[#717786]'>
			<h3 className='text-sm sm:text-base'>{title}</h3>
			<p className='text-[#D2D5DA] text-sm sm:text-base'>{info}</p>
		</div>
	);
};

RowCountry.propTypes = {
	title: PropTypes.string.isRequired,
	info: PropTypes.any.isRequired,
};
