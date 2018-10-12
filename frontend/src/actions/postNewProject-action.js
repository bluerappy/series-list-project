export function postNewProject(obj) {
    return {
        type : POSTNEWPROJECT_REQUEST,
        payload : obj   
    };
  }
  
  export const POSTNEWPROJECT_REQUEST  = 'POSTNEWPROJECT_REQUEST';
  export const POSTNEWPROJECT_SUCCESS  = 'POSTNEWPROJECT_SUCCESS';
  export const POSTNEWPROJECT_FAILURE  = 'POSTNEWPROJECT_FAILURE';