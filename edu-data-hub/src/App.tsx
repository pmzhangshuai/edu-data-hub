import { BrowserRouter } from "react-router-dom";
import { Router } from "@/router";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
