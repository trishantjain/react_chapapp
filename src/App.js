import { Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={Chatpage} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
