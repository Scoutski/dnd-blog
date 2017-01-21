import initialState from '../initial_state';

export default (state = initialState.posts, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
