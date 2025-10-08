import { Toaster } from "@/components/ui/toaster";
import { HashRouter} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AddMember from "./pages/AddMember";
import FamilyTree from "./pages/FamilyTree";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/tree" element={<FamilyTree />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
      {/* </BrowserRouter> */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
