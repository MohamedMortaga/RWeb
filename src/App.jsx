import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import style from './App.module.css';
export default function App() {
  return <>
    <div className={`${style.bg}bg-light`}>
      <Navbar/>
      <br/>
      <div className="container-fluid px-5 ">
      <Home className="bg-light"/>
        <br/>
        <About/>
        <br/>
      </div>
      
      <Footer/>
    </div>
  </>
  
}
