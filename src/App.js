import logo from './logo.svg';
import './App.css';
import TaskComponent from './components/pure/TaskComponent';
import Task_list from './components/container/Task_list';
import Contact_list from './components/container/Contact_list';

function App() {
  return (
    <div className="App">
      <Contact_list/>
    </div>
  );
}

export default App;
