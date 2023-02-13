const CHECK_STATUS = 'bookstore/category/CHECK_STATUS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Coming Soon';
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
