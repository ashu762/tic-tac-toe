import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import GameScreen from "./screens/GameScreen";
import Results from "./screens/Results";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/game" component={GameScreen} exact></Route>
        <Route path="/results" component={Results} exact></Route>
      </div>
    </Router>
  );
}

export default App;
