import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentLiterature from "./components/Content/content-literature";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentLiterature/>
      <Footer/>
    </div>
  );
}

export default App;
