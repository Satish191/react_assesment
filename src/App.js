import './App.css';
import Todo from './Component/Todo/Todo'
import {Route} from 'react-router-dom'
import EditTodo from './Component/Todo/EditTodo';



function App() {
  return (
    <div className="App">
      <Route path='/' 
             exact
             component={Todo}/>
      <Route
                path='/Edit:id'
                component={EditTodo}/>
    </div>
  );
}

export default App;
