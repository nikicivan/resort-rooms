import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import Rooms from './pages/rooms';
import SingleRoom from './pages/singleRoom';
import ErrorPage from './pages/error';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
    <Navbar />
	    <Switch>
	    	<Route exact path='/' component={Home} />
	      	<Route exact path='/rooms/' component={Rooms} />
	      	<Route exact path='/rooms/:key' component={SingleRoom} />
	      	<Route component={ErrorPage} />
	    </Switch>
    </div>
  );
}

export default App;
