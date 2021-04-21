import { createStore } from "redux";

function App() {

  // A reducer function must have to parameters, state and action
  const reducer = (state = {}, action)=> {
    return state;
  };

  // Creating a store config
  const store = createStore(reducer);

  // Subscribe the store
  store.subscribe(()=>{
    console.log(store.getState())
  });

  // Store Action
  store.dispatch({ type: "Something" })


  return (
    <div>

    </div>
  );
}

export default App;
