export default {
    namespace: 'products',
    state: [],
    reducers: {
      'delete':(state, { payload: id }) =>  {
        return state.filter(item => item.id !== id);
      },
    },
    effects: {
        // *addAfter1Second(action, { call, put }) {
        //   yield call(delay, 1000);
        //   yield put({ type: 'delete' });
        // },
      },
  };