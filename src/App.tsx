import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Events from './pages/Event';
import Certificate from './pages/Certificate';
import DownloadTab from './components/DownloadTab';
import QuickFinderTab from './components/QuickFinderTab';
import ProductDetails from './pages/ProductDetails';
import { Sustainability } from './pages/Sustainability';
import { CSR } from './pages/CSR';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DownloadTab />
      <QuickFinderTab />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/about-us" element={<About />} />
            <Route path="/company/corporate-social-responsibility" element={<CSR />} />
            <Route path="/company/sustainability" element={<Sustainability />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/:category/:id" element={<ProductDetails />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/certs" element={<Certificate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

