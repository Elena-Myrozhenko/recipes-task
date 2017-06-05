import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { filterByMask } from "../../actions";

class NavMaskFilter extends Component {
  render() {
    const { mask, filterByMask } = this.props;
    return (
      <Input
        transparent
        icon="search"
        iconPosition="left"
        placeholder="Filter by name or #tag..."
        value={mask}
        onChange={filterByMask}
      />
    );
  }
}

NavMaskFilter = connect(
  state => {
    const { mask } = state;
    return { mask };
  },
  { filterByMask }
)(NavMaskFilter);

export default NavMaskFilter;
