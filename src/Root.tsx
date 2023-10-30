import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '#features/header/header';
import { Footer } from '#ui/footer/footer';
import { MainNewBooks } from './pages/main-new-books';

function Root() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainNewBooks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
