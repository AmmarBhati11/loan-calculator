import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import ExchangeRate from './Pages/ExchangeRate';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import ThemeToggle from './Components/ThemeToggle';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange-rate" element={<ExchangeRate />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ThemeToggle/>
    </Router>
  );
}
