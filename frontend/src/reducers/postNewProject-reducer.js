const defaultState = {
    projectList: []
  }
  
  export default (state=defaultState, action={}) => {
    // console.log("seriesList reducer")
    // console.log("get", action.payload)
    switch (action.type) {
      case 'POSTNEWPROJECT_SUCCESS': {
        return {
          ...state,
          projectList: action.payload
        }
      }
      default:
        return state;
    }
  }
  