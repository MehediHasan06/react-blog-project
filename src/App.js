// import { useState } from 'react';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import NewBlog from "./component/newBlog/NewBlog";
import BlogDetails from "./component/blogDetails/BlogDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //const title = "Welcome to my world !";

  // const handleClick = (e) => {
  //   console.log('hello ninjas', e);
  // }

  // const handleClickAgain = (name, e) => {
  //   console.log('hello ' + name + e.target);
  // }
  
  //What will happen, when we invoke a function inside the return statement?
  //Event objects automatically get access inside of a function when an event occurs. There is a parameter that automatically acts as the event object. Here, we've denoted it with e. It contains event property. 

  // const [name, setName] = useState("Mario");
  // const handleClick = () =>{
  //   setName('Masud');
  // }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/*<h1>{title}</h1>  Dynamic value in component using js*/}
          {/*<p>{Math.random() *10}</p>*/}

          {/*<button onClick={handleClick}>Click me</button>*/}
          {/*<button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>*/}

          {/*<p>{ name }</p>
          <button onClick={handleClick}>Click to change the name</button>*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newBlog" component={NewBlog}/>
            <Route path="/blogs/:id" component={BlogDetails}/>
          </Switch>          
        </div>
      </div>
    </Router>
  );
}

export default App;
