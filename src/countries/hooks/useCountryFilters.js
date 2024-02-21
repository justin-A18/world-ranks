import { useEffect, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';

export const useCountryFilters = () => {
	const { 
		dispatch, 
		filterByStatus, 
		filterCountryByRegion, 
		sortByPopular 
	} = useCountries();

	const [select, setSelect] = useState('');
	const [isMember, setIsMember] = useState(false);
	const [activeRegion, setActiveRegion] = useState('all');
	const [isIndependent, setIsIndependent] = useState(false);

	useEffect(() => {
		dispatch(
			filterByStatus({
				status: { independent: isIndependent, memberUnited: isMember },
			})
		);
	}, [dispatch, filterByStatus, isIndependent, isMember]);

	useEffect(() => {
		dispatch(sortByPopular(select));
	}, [dispatch, sortByPopular, select]);

	const handleClickRegion = (region) => {
		setActiveRegion(region);
		dispatch(filterCountryByRegion({ region }));
	};

	const handleChangeMember = ({ target }) => {
		const { checked } = target;
		setIsMember(checked);
	};

	const handleChangeIndependent = ({ target }) => {
		const { checked } = target;
		setIsIndependent(checked);
	};

	const handleChangeSelect = ({ target }) => {
		const { value } = target;
		setSelect(value);
	};

	return {
		isMember,
		select,
		activeRegion,
		isIndependent,
		handleClickRegion,
		handleChangeMember,
		handleChangeSelect,
		handleChangeIndependent,
	};
};
