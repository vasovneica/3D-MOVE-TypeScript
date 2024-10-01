
export const BASE_URL = process.env.REACT_APP_API_URL;


export const downloadModel = (id:string) => BASE_URL + '/model/' + id + '/download';
