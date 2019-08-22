import * as types from "./../constants/constants";

const initialState = JSON.parse(localStorage.getItem('carts')) || [];

function products(state = initialState, action) {
  let tempState = [...state];
  var item = action.item || null;
  switch (action.type) {
    case types.ADD_CART:
      var quantity = action.quantity;
      var indexAddCart = tempState.findIndex((element) => element.id === item.id);
      if(indexAddCart !== -1){        
        tempState[indexAddCart].quantity += quantity;
        tempState[indexAddCart].temp_quantity += quantity;
      }else {
        tempState.push({
          id : item.id,
          name : item.name,
          price : item.price,
          quantity : quantity
        });
      }

      //localStorage
      localStorage.setItem("carts", JSON.stringify(tempState));

      return tempState;
    case types.DELETE_CART:      
      tempState = tempState.filter(function(value){
        return value.id !== action.id;
      });

      //localStorage
      localStorage.setItem("carts", JSON.stringify(tempState));

      return tempState;
    case types.UPDATE_CART:      
      
      var indexUpdateCart = tempState.findIndex((element) => element.id === item.id);

      tempState[indexUpdateCart].quantity = +action.quantity;

      //localStorage
      localStorage.setItem("carts", JSON.stringify(tempState));
      
      return tempState;
    default:
      return state;
  }
}

export default products;
