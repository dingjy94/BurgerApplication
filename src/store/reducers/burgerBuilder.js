import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const prices = {
  salad: 0.1,
  bacon: 0.3,
  cheese: 0.15,
  meat: 0.4
};

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 3,
  error: false
};

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updateStates = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + prices[action.ingredientName]
  };
  return updateObject(state, updateStates);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const updateIdngredients = updateObject(state.ingredients, updatedIngredient);
  const updateStates = {
    ingredients: updateIdngredients,
    totalPrice: state.totalPrice - prices[action.ingredientName]
  };
  return updateObject(state, updateStates);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 3,
    error: false
  });
};

const fetchIngredientsFailed = (state) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state);
    default:
      return state;
  }
};

export default reducer;
