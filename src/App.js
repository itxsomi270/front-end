import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from './components/navbar/MyNavbar';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import Posts from './components/posts/Posts';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Routes>
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
