import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import Contact from "@/pages/contact";
import CancellationRefund from "@/pages/cancellation-refund";
import ShippingDelivery from "@/pages/shipping-delivery";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/contact" component={Contact} />
      <Route path="/cancellation-refund" component={CancellationRefund} />
      <Route path="/shipping-delivery" component={ShippingDelivery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Get base path from Vite config for GitHub Pages
  const base = import.meta.env.BASE_URL;
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TooltipProvider> */}
        {/* <Toaster /> */}
        <WouterRouter base={base}>
          <Router />
        </WouterRouter>
      {/* </TooltipProvider> */}
    </QueryClientProvider>
  );
}

export default App;
