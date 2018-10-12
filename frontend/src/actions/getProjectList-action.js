export function getProjectList() {
    return {
        type : GETPROJECTLIST_REQUEST   
    };
  }
  
  export const GETPROJECTLIST_REQUEST  = 'GETPROJECTLIST_REQUEST';
  export const GETPROJECTLIST_SUCCESS  = 'GETPROJECTLIST_SUCCESS';
  export const GETPROJECTLIST_FAILURE  = 'GETPROJECTLIST_FAILURE';
  