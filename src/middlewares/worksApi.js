import axios from 'axios';

const worksApi = (store) => (next) => (action) => {
        //You can create a new instance of axios with a custom config
        const api = axios.create({
            baseURL: 'https://api.github.com/users',
        });
    
        if (action.type === 'FETCH_WORKS') { 
            api.get('/felipe-brando/repos')
            .then((response) => {
              store.dispatch({
                type: 'SAVE_WORKS',
                repos: response.data,
              });
        
            })
            .catch((error) => {
              console.error('FETCH_RESOURCES error : ', error);
            });            
          }

  
  
  
    //---GET Requests
  

    
      
  
    next(action);
  };
  
  export default worksApi;