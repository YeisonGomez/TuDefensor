import { apiUrl } from './enviroment';
import Token from './token';

export class Api{

  async post(url, data, header){
      let dataBody = JSON.stringify(data);
      
      return fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: (header ? header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ await Token.getToken() }`
        }),
        body: dataBody
      })
  }

  put(url, data, header){
    let isFormData = data instanceof FormData;
    
    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: (header ? header: 
        isFormData? 
        { 'Authorization': `Bearer ${ Token.getToken() }` }
        : 
        {
          'Accept': isFormData? '': 'application/json',
          'Content-type': isFormData? '': 'application/json',
          'Authorization': `Bearer ${ Token.getToken() }`
        }
      ),
      body: isFormData? data: JSON.stringify(data) 
    })
  }

    postFile(url, file){
        const formData = new FormData();
        formData.append('analysis',file);

        return fetch(`${apiUrl}${url}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${ Token.getToken() }`
          },
          body: formData
        })
    }

    async get(url, params){
        url = new URL(`${apiUrl}${url}`);
        if(params)
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ await Token.getToken() }`
            }
        });
    }
}
  
export default new Api();