import { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface RedirectProps {
  to: string;
  hash?: string;
}

const Redirect = ({ to, hash }: RedirectProps) => {
  useEffect(() => {
    if (hash) {
      // Ensure smooth scroll after navigation to anchor
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return <Navigate to={`${to}${hash ?? ""}`} replace />;
};

export default Redirect;
