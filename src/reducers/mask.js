const mask = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER_MASK_SUCCESS':
      return action.mask;
    default:
      return state;
  }
};

export default mask;
