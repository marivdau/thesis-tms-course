import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '#features/header/header';
import { Footer } from '#ui/footer/footer';
import { MainNewBooksPage } from './pages/main-new-books-page';
import { BookPreviewPage } from './pages/book-preview-page';
import { SignInPage } from './pages/sign-in-page';
import { SignUpPage } from './pages/sign-up-page';
import { ResetPasswordPage } from './pages/reset-password-page';
import { NewPasswordPage } from './pages/new-password';
import { FavouritesPage } from './pages/favourites-page';
import { CartPage } from './pages/cart-page';
import { AccountPage } from './pages/account-page';
import { AllBooksPage } from './pages/all-books-page';
import { PaymentPage } from './pages/payment-page';
import { SearchResultPage } from './pages/all-search-result-page';

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
        <Route path='/cart' element={<CartPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/new-password' element={<NewPasswordPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
