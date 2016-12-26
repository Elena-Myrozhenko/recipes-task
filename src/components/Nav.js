import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import AddRecipe from '../containers/AddRecipe';
import NavFilterLink from '../containers/NavFilterLink';
import NavFilterMask from '../containers/NavFilterMask';

const Nav = () => (
	<Menu text>
		<AddRecipe>
			<Menu.Item icon as="a">
				<Icon name="plus" />
			</Menu.Item>
		</AddRecipe>
		<NavFilterLink filter="all">All</NavFilterLink>
		<NavFilterLink filter="favorites">Favorites</NavFilterLink>
		<NavFilterLink filter="cooked">Cooked</NavFilterLink>
		<NavFilterLink filter="uncooked">Uncooked</NavFilterLink>
		<NavFilterLink filter="untagged">Untagged</NavFilterLink>
		<Menu.Menu position="right">
			<Menu.Item>
				<NavFilterMask />
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

export default Nav;