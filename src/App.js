import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState name="Classes State" />
    </div>
  );
}

export default App;
