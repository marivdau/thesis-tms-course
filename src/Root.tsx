import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '#features/header/header';
import { Footer } from '#ui/footer/footer';
import { MainNewBooksPage } from './pages/main-new-books';
import { BookPreviewPage } from './pages/book-preview';

function Root() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainNewBooksPage />} />
        <Route path='/preview-book/:bookIsbn' element={<BookPreviewPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
