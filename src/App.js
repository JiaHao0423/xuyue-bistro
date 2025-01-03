import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './page/HomePage';
import MenuPage from './page/MenuPage';
import ContactsPage from './page/ContactsPage';
import AboutUsPage from './page/AboutUsPage';
import ParkingPage from './page/ParkingPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Navigate to="/index" />} />
            <Route path="/index" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/parking" element={<ParkingPage />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
