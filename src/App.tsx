import { trackPhoneIntent } from "./lib/analytics";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import { captureReferralCode } from "./lib/referral";

const App = () => {
  useEffect(() => {
    captureReferralCode();
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href^="tel:"]')) trackPhoneIntent();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
