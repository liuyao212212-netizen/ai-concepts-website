import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { ContactPage } from "./pages/Contact";
import { CareersPage } from "./pages/Careers";
import { PlatformPage } from "./pages/Platform";
import { SolutionsPage } from "./pages/Solutions";
import { CustomersPage } from "./pages/Customers";
import { EcosystemPage } from "./pages/Ecosystem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: { retry: 1 },
  },
});

const hideLayoutPaths = ['/login', '/contact', '/careers'];

function AppContent() {
  const location = useLocation();
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {!hideLayout && <Header />}
      <div className="flex-1">
        <AnimatedRoutes>
          <Route path="/" element={<PageTransition transition="slide-up"><HomePage /></PageTransition>} />
          <Route path="/platform" element={<PageTransition transition="fade"><PlatformPage /></PageTransition>} />
          <Route path="/solutions" element={<PageTransition transition="fade"><SolutionsPage /></PageTransition>} />
          <Route path="/customers" element={<PageTransition transition="fade"><CustomersPage /></PageTransition>} />
          <Route path="/ecosystem" element={<PageTransition transition="fade"><EcosystemPage /></PageTransition>} />
          <Route path="/login" element={<PageTransition transition="fade"><LoginPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition transition="fade"><ContactPage /></PageTransition>} />
          <Route path="/careers" element={<PageTransition transition="fade"><CareersPage /></PageTransition>} />
          <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
        </AnimatedRoutes>
      </div>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App
