import React from 'react';
import { NavLink } from 'react-router-dom';

const NavFilterLink = ({ filter, children }) => (
	<NavLink to={'/?filter=' + filter} activeClassName="active" className="item">
		{children}
	</NavLink>
);

export default NavFilterLink;