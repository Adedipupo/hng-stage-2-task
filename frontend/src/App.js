import './App.css';
import Hompage from './pages/Hompage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <main>
          <Route path="/" component={Hompage} exact />
          <ToastContainer />
      </main>

    </Router>
  );
}

export default App;
