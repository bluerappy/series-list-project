  export default ( state= false,action={}) => {
    switch (action.type) {
      case 'ALERT_REQUEST': {
        return {
          ...state,
          alert: action.payload
        }
      }
      default:
        return state;
    }
  }
  