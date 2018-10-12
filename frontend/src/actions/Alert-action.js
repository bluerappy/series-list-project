export function alert(alert) {
    return {
        type : ALERT_REQUEST,  payload: alert
    };
  }
  
  export const ALERT_REQUEST  = 'ALERT_REQUEST';
  