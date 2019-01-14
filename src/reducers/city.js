 import {SET_CITY}  from './../actions'
 
 
 export const city = (state, action) => {
     switch (action.type) {
         case SET_CITY:
            // Modifica el estado anterior con el valor del action (payload)
            return {...state, city: action.payload };
     
         default:
             return state;
     }
}