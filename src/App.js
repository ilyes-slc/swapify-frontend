import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Items from './components/Items';
import About from './components/About';
import Team from './components/Team';
import SwipeButtons from './components/SwipeButtons';
import SignIn from './components/SignIn';
import Profile from "./components/Profile";
import ProductsList from "./components/products-list.component";
import AddProduct from "./components/add-product.component";
import ProductSwipeList from "./components/ProductSwipeList";

function App() {
  return (
    <div className="App">
      <Router>

      <header id="header">
           <Header />
      </header>



        <main>
          <Routes>

            <Route path="/" element={<HomeLayout />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/items" element={<ProductsList />} />
              <Route path="/add" element={<AddProduct />} />
            <Route path="/swipe/:productId" element={<ProductSwipeList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/swipe-buttons" element={<SwipeButtons />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

// Create a new component for the home layout
function HomeLayout() {
  return (
    <>
      <Hero id="home" />
      <About id="about" />
      <Team id="teams" />

    </>
  );
}

export default App;