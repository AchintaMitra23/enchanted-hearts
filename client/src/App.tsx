import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

// Components
import { PageTransition } from "@/components/PageTransition";
import { MusicPlayer } from "@/components/MusicPlayer";

// Pages
import Landing from "@/pages/Landing";
import Timeline from "@/pages/Timeline";
import Gallery from "@/pages/Gallery";
import SecretQuestion from "@/pages/SecretQuestion";
import FinalNote from "@/pages/FinalNote";
import NotFound from "@/pages/not-found";
import ValentineQNA from "./pages/ValentineQNA";
import PasswordGate from "./pages/PasswordGate";

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location}>
        <Route path="/enchanted-hearts/">
          <PageTransition>
            <Landing />
          </PageTransition>
        </Route>
        <Route path="/timeline">
          <PageTransition>
            <Timeline />
          </PageTransition>
        </Route>
        <Route path="/gallery">
          <PageTransition>
            <Gallery />
          </PageTransition>
        </Route>
        <Route path="/secret-question">
          <PageTransition>
            <PasswordGate />
          </PageTransition>
        </Route>
        <Route path="/final">
          <PageTransition>
            <FinalNote />
          </PageTransition>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-hidden selection:bg-black-200">
        <AnimatedRoutes />
        <MusicPlayer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
