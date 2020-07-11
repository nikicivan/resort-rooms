import React from 'react';
import Title from './title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends React.Component {
	state = {
		services: [
		{
			icon: <FaCocktail/>,
			title: 'free cocktails',
			info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem, fringilla eu lacinia ut, sodales a nisi.'
		},
		{
			icon: <FaHiking/>,
			title: 'Endless Hiking',
			info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem, fringilla eu lacinia ut, sodales a nisi.'
		},
		{
			icon: <FaShuttleVan/>,
			title: 'Free shuttle',
			info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem, fringilla eu lacinia ut, sodales a nisi.'
		},
		{
			icon: <FaBeer/>,
			title: 'Strongest Bear',
			info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem, fringilla eu lacinia ut, sodales a nisi.'
		}
		]
	}
	render() {
		return (  
			<section className='services'>
				<Title title='services' />
				<div className='services-center'>
				{this.state.services.map((item, index) => {
					return <article key={index} className='services'>
						<span>{item.icon}</span>
						<h6>{item.title}</h6>
						<p>{item.info}</p>
					</article>
				})}
				</div>
			</section>		
		) 			
	}
};

export default Services;