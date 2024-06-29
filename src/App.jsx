import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';

function App() {

  return (
    <div>
      <Header></Header>
      <div className=' container mx-auto'>

        <Countries></Countries>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default App;
