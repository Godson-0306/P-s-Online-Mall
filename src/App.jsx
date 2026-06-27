import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoadingSkeleton from './components/LoadingSkeleton.jsx';

const ShopPage = lazy(() => import('./pages/ShopPage.jsx'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage.jsx'));
const AuthPage = lazy(() => import('./pages/AuthPage.jsx'));

export default function App() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/forgot-password" element={<AuthPage mode="forgot" />} />
        <Route path="/reset-password" element={<AuthPage mode="reset" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
