import React from 'react';
import RoomsFilter from './roomsFilter';
import RoomsList from './roomsList';
import { withRoomConsumer } from '../context';
import Loading from './loading';

function RoomContainer({context}) {
	const {loading, rooms, sortedRooms} = context;
	if(loading) {
		return <Loading />;
	}
	return (
		<div>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms}/>
		</div>
	);		
}

export default withRoomConsumer(RoomContainer);


/*import React from 'react';
import RoomsFilter from './roomsFilter';
import RoomsList from './roomsList';
import { RoomConsumer } from '../context';
import Loading from './loading';

const RoomContainer = () => {
	return (
		<RoomConsumer>
		{value => {
			const {loading, sortedRooms, rooms} = value;
			if(loading) {
				return <Loading />
			}
			return (
				<div>
					hello from rooms container
					<RoomsFilter rooms={rooms} />
					<RoomsList rooms={sortedRooms}/>
				</div>
			);			
		}}
		</RoomConsumer>		
	);
};

export default RoomContainer;*/