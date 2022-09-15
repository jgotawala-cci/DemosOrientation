const randomId = () => Math.random().toString();

const createItem = (title: string) => ({id: randomId(), title});

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

export const actionCreators = {
  add: (title: string) => ({type: types.ADD, payload: createItem(title)}),
  remove: (id: string) => ({type: types.REMOVE, payload: id}),
};

export const initialState = {
  items: [
    createItem('Click to remove'),
    createItem('Value 1'),
    createItem('Value 2'),
    createItem('Value 3'),
  ],
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case types.ADD:
      return {...state, items: [...state.items, action.payload]};
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item: any) => item?.id !== action.payload),
      };
  }
}
