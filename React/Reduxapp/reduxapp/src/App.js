import './App.css';
import Header from './Header/Header';

import Todos from './TodoItem/Todos'
import Footer from './Footer/Footer'

// import { Provider } from 'react-redux';
// import store from './Redux/store';

function App() {
  return (
    <div>    
      <Header title="Todos list" searchBar={false }/>
      
     
      <Todos/>
      <Footer/>
    
    </div>

  );
}
// if true search bar will appear if false it won't show

export default App;