import logo from './logo.svg';
import './App.css';
import NavbarTop from './components/NavbarTop';
import Info from './components/Info';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
function App() {
  return (
    <div className="App">

      <NavbarTop></NavbarTop>
      <Info></Info>
      <About></About>
      <Portfolio></Portfolio>
      <Services></Services>
      <span>Hello! My name is Khoi</span>
    </div>
  );
}

export default App;
