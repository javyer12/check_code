import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import { UseReducer } from './components/useReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState name="Class State" />
      <UseReducer />
    </div>
  );
}

export default App;
