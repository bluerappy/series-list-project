export function getSeriesList() {
    // console.log("get series action")
    return {
        type : GETSERIESLIST_REQUEST   
    };
  }
  
  export const GETSERIESLIST_REQUEST  = ' GETSERIESLIST_REQUEST';
  export const GETSERIESLIST_SUCCESS  = 'GETSERIESLIST_SUCCES';
  export const GETSERIESLIST_FAILURE  = 'GETSERIESLIST_FAILURE';
  