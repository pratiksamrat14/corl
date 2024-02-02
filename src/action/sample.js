const action = {
  type: '',
  payload: {},
};

export const INCREMENT = '@@sampel/increment';
export const increment =
  (count = 0) =>
  async (dispatch) => {
    try {
      action.type = INCREMENT;
      action.payload = count + 1;
      dispatch(action);
    } catch (error) {
      console.log('Error from sample action', error);
    }
  };
