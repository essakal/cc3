import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/UserSlice";
import { getToDoList } from "./redux/TodoSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/Acceuil";
import "./App.css";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getToDoList());
  }, [dispatch]);
  return (
    <Router>
      <div>
      <Accueil />
    </div>
    </Router>
    
  );
}

export default App;
