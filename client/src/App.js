import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./pages/Articles/Articles";
import Saved from "./pages/Saved/Saved";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Articles}/>
        <Route exact path="/saved" component={Saved}/>
      </div>
    </Router>
  );
}

export default App;
