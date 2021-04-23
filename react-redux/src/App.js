import { Provider } from "react-redux";
import Controller from "./components/Controller";
import Count from "./components/Count";
import Store from "./store";

function App() {
  return (
    <Provider store={Store}>    
      <h1>Hi There</h1>
      <Count />
      <Controller />
    </Provider>
  );
}

export default App;
