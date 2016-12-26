import React from 'react';
import { Link } from 'react-router';

const NavFilterLink = ({ filter, children }) => (
	<Link to={filter} activeClassName="active" className="item">
		{children}
	</Link>
);

export default NavFilterLink;