import Contact from "./components/contact/Contact";
import PresentationSection from "./components/presentationSection/PresentationSection";
import Header from "./components/header/Header";
import WorksSection from "./components/worksSection/WorksSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Cube from "./components/cube/Cube";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <PresentationSection />
        <WorksSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
