import './App.css';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
export default function App() {
  return <>
    <div className="bg-dark">
      <Navbar/>
      <br/>
      <Home className="bg-dark pt-5"/>
      <br/>
      <Footer/>
      Hi
    </div>
  </>
  
}
