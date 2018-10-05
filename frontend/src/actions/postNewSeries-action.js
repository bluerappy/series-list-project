export function postNewSeries(obj) {
    console.log("POST series action")
    return {
        type : POSTNEWSERIES_REQUEST,
        payload : obj   
    };
  }
  
  export const POSTNEWSERIES_REQUEST  = 'POSTNEWSERIES_REQUEST';
  export const POSTNEWSERIES_SUCCESS  = 'POSTNEWSERIES_SUCCESS';
  export const POSTNEWSERIES_FAILURE   = 'POSTNEWSERIES_FAILURE';