import axios from 'axios';
import * as types from './../types';

export const getDorms = () => ({
  type: types.GET_DORMS,
  payload: axios({
    method: 'GET',
    url: "https://reqres.in/api/users"
  })
})

export const addDorm = (value, token) => ({
    type: types.ADD_DORM,
    payload: axios({
      method: 'POST',
      url: "https://reqres.in/api/user",
      headers : {"Authorization" : `Bearer ${token}`}, 
      data : {
          value

      }
      
    })
  })

export const updateDorm = (value, id) => ({
    type: types.UPDATE_DORM,
    payload: axios({
        method: 'PATCH',
        url: `https://reqres.in/api/user/${id}`,
        data : {
            value
        }
        
      })
});

// export const removeDorm =  id => ({
//     type: types.REMOVE_DORM,
//     payload: axios({
//         method: 'DELETE',
//         url: `https://reqres.in/api/user/${id}`,
//       })
// });
