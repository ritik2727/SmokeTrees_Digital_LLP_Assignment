
import './App.css';
import Form from './Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <header className="App-header">
       <Form/>
      </header>
    </div>
  );
}

export default App;
