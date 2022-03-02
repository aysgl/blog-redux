import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Blogs />} />
        <Route path='/:blogid' exact element={<BlogDetails />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
