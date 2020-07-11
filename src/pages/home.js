import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/hero';
import Baner from '../components/baner';
import Services from '../components/services';
import FeaturedRooms from '../components/featuredRooms';

const Home = () => {
	return (
		<div>
		<Hero>
			<Baner title='luxurios rooms' subTitle='deluxe rooms starting at $299'>
				<Link to='/rooms' className='btn-primary'>
					our rooms
				</Link>
			</Baner>
		</Hero>
		<Services />
		<FeaturedRooms />
		</div>
	);
};

export default Home;