import React from 'react';
import Hero from '../components/hero';
import Baner from '../components/baner';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Hero>
			<Baner title='404' subTitle='page not found'>
				<Link to='/' className='btn-primary'>
					return home
				</Link>
			</Baner>
		</Hero>
	)
}

export default ErrorPage;