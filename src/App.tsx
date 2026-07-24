import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AirPage = lazy(() => import('./pages/AirPage'));
const SeaPage = lazy(() => import('./pages/SeaPage'));
const ArcPage = lazy(() => import('./pages/ArcPage'));
const ArcGcsDownloadPage = lazy(() => import('./pages/ArcGcsDownloadPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const PartnersAlliancesPage = lazy(() => import('./pages/PartnersAlliancesPage'));
const PartnersDistributorsPage = lazy(() => import('./pages/PartnersDistributorsPage'));
const SupplierEcosystemPage = lazy(() => import('./pages/SupplierEcosystemPage'));
const SupplierDetailPage = lazy(() => import('./pages/SupplierDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AboutVisionPage = lazy(() => import('./pages/AboutVisionPage'));
const AboutNewsPage = lazy(() => import('./pages/AboutNewsPage'));
const AboutCareersPage = lazy(() => import('./pages/AboutCareersPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loader" aria-live="polite" aria-busy="true">
          <div className="route-loader-orb" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/air" element={<AirPage />} />
        <Route path="/sea" element={<SeaPage />} />
        <Route path="/arc-os" element={<ArcPage />} />
        <Route path="/downloads/arc-gcs" element={<ArcGcsDownloadPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/partners" element={<SupplierEcosystemPage />} />
        <Route path="/partners/alliances" element={<PartnersAlliancesPage />} />
        <Route path="/partners/distributors" element={<PartnersDistributorsPage />} />
        <Route path="/partners/suppliers" element={<Navigate replace to="/partners" />} />
        <Route path="/partners/suppliers/:supplierSlug" element={<SupplierDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision" element={<AboutVisionPage />} />
        <Route path="/about/news" element={<AboutNewsPage />} />
        <Route path="/about/careers" element={<AboutCareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
