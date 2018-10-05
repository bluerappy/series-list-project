const defaultState = {
    seriesList: []
  }
  
  export default (state=defaultState, action={}) => {
    console.log("seriesList reducer")
    console.log("post", action.payload)
    switch (action.type) {
      case 'POSTNEWSERIES_SUCCESS': {
        return {
          ...state,
          seriesList: action.payload
        }
      }
      default:
        return state;
    }
  }