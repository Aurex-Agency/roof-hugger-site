import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import { captureReferralCode } from "./lib/referral";

const App = () => {
  useEffect(() => {
    captureReferralCode();
  }, []);

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
