const initialState = {
    formDataList: [],
  };
  
  export const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FORM_DATA':
        return {
          ...state,
          formDataList: [...state.formDataList, action.payload],
        };
      default:
        return state;
    }
  };
  