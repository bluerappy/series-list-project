export default (state=[], action={}) => {
      // console.log(" get reducer", action.payload)
    switch (action.type) {
      case 'GETPROJECTLIST_SUCCESS': 
        return action.payload
      default:
        return state;
    }
  }
  