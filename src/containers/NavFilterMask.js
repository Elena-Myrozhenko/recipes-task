import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input } from 'semantic-ui-react';

class NavFilterMask extends Component {
	render() {
		const { mask, filterByMask } = this.props;
		return <Input transparent icon="search" iconPosition="left" placeholder="Filter by name or #tag..." value={mask} onChange={filterByMask} />;
	}
}

NavFilterMask = connect((state) => {
	const { mask } = state;
	return { mask };
}, actions)(NavFilterMask);


export default NavFilterMask;