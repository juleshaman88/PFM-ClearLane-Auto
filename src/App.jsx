import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import BlogArticle from './components/BlogArticle.jsx';
import LandingPage from './components/LandingPage.jsx';
import NavBar from './components/NavBar.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogArticle />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="*" element={<><NavBar /><main className="wrap page-placeholder"><h1>Page not found</h1></main></>} />
      </Routes>
    </BrowserRouter>
  );
}
