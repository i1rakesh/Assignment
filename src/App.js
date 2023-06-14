import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Communities from "./pages/Communities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/contactUs" element ={<Contact/>}/>
          <Route path="/services" element ={<Services/>}/>
          <Route path="/communities" element ={<Communities/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
