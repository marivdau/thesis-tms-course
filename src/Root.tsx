import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '#features/header/header';
import { Footer } from '#ui/footer/footer';
import { MainNewBooksPage } from './pages/main-new-books';
import { BookPreviewPage } from './pages/book-preview';
import { SignInPage } from './pages/sign-in';
import { SignUpPage } from './pages/sign-up';
import { ResetPasswordMainPage } from './pages/reset-password-main';
import { NewPassword } from './pages/new-password';
import { FavouritesPage } from './pages/favourites';
import { Cart } from './pages/cart';
import { Account } from './pages/account';
import { AllBooksPage } from './pages/all-books';
import { Payment } from './pages/payment-page';
import { SearchResultPage } from '#features/search/all-search-result';

function Root() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainNewBooksPage />} />
        <Route path='/all' element={<AllBooksPage />} />
        <Route path='/search-result' element={<SearchResultPage />} />
        <Route path='/preview-book/:bookIsbn' element={<BookPreviewPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/account' element={<Account />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/reset-password' element={<ResetPasswordMainPage />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
