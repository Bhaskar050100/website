import Navbar from './components/Navbar'
import ReactSlider from './components/ReactSlider'
import About from './components/About'
import CarrersJournals from './components/CarrersJournals'
import Conferences from './components/Conferences'
import Registration from './components/Registration'
import Footer from './components/Footer'


import './App.css';

function App() {
  return (
    <div className='cont'>
      <Navbar />
      <div className='home-cont mt-5'>
        <ReactSlider />
        <div className='container-fluid'>
          <About />
          <CarrersJournals />
          <Conferences />
          <Registration />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
