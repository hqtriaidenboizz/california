import logo from './logo.svg';
import './App.css';
import Loading from './Pages/Loading';
import Home from './Pages/Home';
import Footer from './Layouts/Footer';
import Tickets from './Pages/tickets';


function App() {
  return (
    <div className="App">
     {/* <Loading/> */}
     <Home/>
     <Tickets/>
    </div>
  );
}

export default App;
