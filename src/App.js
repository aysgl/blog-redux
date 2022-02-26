import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Blogs />} />
        <Route path='/:blogid' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
