import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '#features/header/header';
import { Footer } from '#ui/footer/footer';
import { MainNewBooksPage } from './pages/main-new-books';
import { BookPreviewPage } from './pages/book-preview';
import { SignInPage } from './pages/sign-in';
import { SignUpPage } from './pages/sign-up';
import { ResetPasswordMainPage } from './pages/reset-password-main';
import { ResetPasswordSentEmailPage } from './pages/reset-password-sent-reset';
import { NewPassword } from './pages/new-password';

function Root() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainNewBooksPage />} />
        <Route path='/preview-book/:bookIsbn' element={<BookPreviewPage />} /> 
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/reset-password' element={<ResetPasswordMainPage />} />
        <Route path='/reset-password-email-sent' element={<ResetPasswordSentEmailPage />} />
        <Route path='new-password' element={<NewPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
