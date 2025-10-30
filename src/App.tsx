import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerify from "./pages/EmailVerify";
import Dashboard from "./pages/Dashboard";
import ApiKeys from "./pages/ApiKeys";
import TryOn from "./pages/TryOn";
import Analytics from "./pages/Analytics";
import Install from "./pages/Install";
import Integrations from "./pages/Integrations";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import Team from "./pages/Team";
import Models from "./pages/Models";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/api-keys" element={<ApiKeys />} />
          <Route path="/try-on" element={<TryOn />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/install" element={<Install />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
          <Route path="/models" element={<Models />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
