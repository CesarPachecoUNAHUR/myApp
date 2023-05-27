import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './componentes/Header';
import Cards from './componentes/Cards';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
function App() {
  return(
    <Router >
      <div className='App'>
        <Header/>
        <Main/>
        <Cards/>  
        <Footer/>

      </div>
      
      
    </Router>
  )
}

export default App;
