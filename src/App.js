import './App.css';
import Home from './Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Home/>
      <ToastContainer position='top-center'
          autoClose={2000} />
    
    </div>
  );
}

export default App;
