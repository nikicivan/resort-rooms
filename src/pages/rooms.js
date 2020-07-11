import React from 'react';
import { Link } from 'react-router-dom';

import RoomContainer from '../components/roomContainer';
import Hero from '../components/hero';
import Baner from '../components/baner';

const Rooms = () => {
	return (
		<div>
		<Hero hero='roomsHero'>
			<Baner title='our rooms'>
				<Link to='/' className='btn-primary'>
					Home
				</Link>
			</Baner>
		</Hero>
		<RoomContainer />
		</div>
	)
};

export default Rooms;