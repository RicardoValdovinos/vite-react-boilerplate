import React from "react";
import LandingPage from "./components/LandingPage";
import { HelmetProvider } from "react-helmet-async";


export default function App() {
  return (
    <HelmetProvider>
      <LandingPage />
    </HelmetProvider>
  );
}
