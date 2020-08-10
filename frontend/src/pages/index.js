import React from 'react';
import { 
    Route, 
    Switch, 
    Redirect, 
    BrowserRouter as Router, 
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import Posts from '../pages/Posts';
import Post from '../pages/SinglePost';
import Home from '../pages/Homepage';
import Login from '../pages/Login';

function PrivateRoute({ component: Component, ...rest }) {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	);
}

export default () => (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute path="/home" component={Home} /> 
        <Redirect path="/" to='/login' />
      </Switch>
    </Router>
);