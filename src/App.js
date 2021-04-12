import logo from './logo.svg';
import './App.css';
import NavbarTop from './components/NavbarTop';
import Info from './components/Info';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import MyFooter from './components/MyFooter';
function App() {
  document.title = "Khoi Nguyen";

  return (
    <div className="App">
      <NavbarTop></NavbarTop>
      <Info></Info>
      <About></About>
      <Portfolio></Portfolio>
      <Services></Services>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
