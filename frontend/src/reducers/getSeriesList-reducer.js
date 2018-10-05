const defaultState = {
    seriesList: []
  }
  
  export default (state=defaultState, action={}) => {
    // console.log("seriesList reducer")
    // console.log("get", action.payload)
    switch (action.type) {
      case 'GETSERIESLIST_SUCCESS': {
        return {
          ...state,
          seriesList: action.payload
        }
      }
      default:
        return state;
    }
  }
  