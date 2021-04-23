import { createStore } from "redux";

const ReduxBasic = ()=> {
    // A reducer function must have to parameters, state and action
    const reducer = (state = {}, action)=> {
      if(action.type === "a"){
        return {
          ...state,
          a: "It's a"
        }
      }
      if(action.type === "b"){
        return {
          ...state,
          b: "It's b"
        }
      }
      return state;
    };
  
    // Creating a store config
    const store = createStore(reducer);
  
    // Subscribe the store
    store.subscribe(()=>{
      console.log(store.getState().a)
    });
    store.subscribe(()=>{
      console.log(store.getState().b)
    });
  
    // Store Action
    store.dispatch({ type: "b" }); // This will show us the state. If we dispatch the action again, then we will get the state again.
    store.dispatch({ type: "anything" });
    store.dispatch({ type: "a" }); 
    store.dispatch({ type: "Something" }); 
    // When we match any type, we can return the state with that type condition. Then if it doesn't match any type it returns the previous state and if it does match, it overrides the previous state.
    //If we dont want to override our previous state, we can simply use the spread operator. Then we can get both the current and previous state.
  
  return(<div></div>)
}

export default ReduxBasic;

//we can use the prople-law-gov example(Hitesh) to realize the example. 
