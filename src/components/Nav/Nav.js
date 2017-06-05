import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import NavLinkFilter from './NavLinkFilter';
import AddRecipe from '../../containers/AddRecipe/AddRecipe';
import NavMaskFilter from '../../containers/NavMaskFilter/NavMaskFilter';

const Nav = () =>
  <Menu text>
    <AddRecipe>
      <Menu.Item icon as="a">
        <Icon name="plus" />
      </Menu.Item>
    </AddRecipe>
    <NavLinkFilter filter="all">All</NavLinkFilter>
    <NavLinkFilter filter="favorites">Favorites</NavLinkFilter>
    <NavLinkFilter filter="cooked">Cooked</NavLinkFilter>
    <NavLinkFilter filter="uncooked">Uncooked</NavLinkFilter>
    <NavLinkFilter filter="untagged">Untagged</NavLinkFilter>
    <Menu.Menu position="right">
      <Menu.Item>
        <NavMaskFilter />
      </Menu.Item>
    </Menu.Menu>
  </Menu>;

export default Nav;
